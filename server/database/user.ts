import {UserModel, type IUser} from '../Models/user';
import type mongodb from 'mongodb';
import mongoose from "mongoose";

type UserData = Pick<IUser, 'email'>;

export const getUser = async (user: UserData): Promise<IUser | null> => {
    try {
        return await UserModel.findOne({
            email: user.email
        }).exec();
    } catch (error) {
        throw { status: 500, message: error };
    }
}

export const saveUser = async (user: UserData): Promise<IUser> => {
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
