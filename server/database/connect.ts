import mongoose from "mongoose";
import {MongoMemoryServer, MongoMemoryReplSet} from 'mongodb-memory-server';
import config from "config";
import {ConnectionStringBD} from "../types";

let mongod: MongoMemoryServer | null = null;

export const connectDB = async (): Promise<void> => {
    try {
        let dbUrl: ConnectionStringBD = config.get('DBHost');
        if (process.env.NODE_ENV === 'test') {
            mongod = await MongoMemoryServer.create();
            dbUrl = mongod.getUri();
        }
        const connection = await mongoose.connect(dbUrl);
        console.log(`MongoDB connected: ${connection.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export const dropDB = async (): Promise<void> => {
    if (mongod) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongod.stop();
    }
};

export const dropCollections = async () => {
    if (mongod) {
        const collections = await mongoose.connection.db.collections();
        for (let collection of collections) {
            await collection.drop();
        }
    }
};

export const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
        if (mongod) {
            await mongod.stop();
        }
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
