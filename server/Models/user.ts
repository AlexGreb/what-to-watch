import { Schema, model } from 'mongoose';

export interface IUser {
    email:string;
    password: string;
    name: string
}


const userScheme = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
})

export const UserModel = model<IUser>('User', userScheme);
