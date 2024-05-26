import { Schema, model } from 'mongoose';

export interface IUser {
    _id: string;
    email:string;
    password: string;
    name: string;
}

export interface ILoginData {
    email:string;
    password: string;
}

const userScheme = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
})

export const UserModel = model<IUser>('User', userScheme);
