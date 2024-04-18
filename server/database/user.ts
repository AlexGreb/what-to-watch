import {UserModel, type IUser} from '../Models/user';
import type mongodb from 'mongodb';
import mongoose from "mongoose";

export const getUser = async (user: IUser): Promise<IUser | null> => {
    try {
        return await UserModel.findOne({
            email: user.email
        }, { _id: 0 }).exec();
    } catch (error) {
        throw { status: 500, message: error };
    }
}

export const saveUser = async (user: IUser): Promise<IUser> => {
    try {
        const userData = new UserModel(user);
        return await userData.save();
    } catch (error) {
        throw { status: 500, message: error };
    }
}

export const createUserCollection = async (): Promise<mongodb.Collection<IUser>> => {
    try {
        if(mongoose.connection.collections.user) {
            return await UserModel.createCollection<IUser>();
        }
        return mongoose.connection.collections.user
    } catch (error) {
        throw { status: 500, message: error };
    }

}
