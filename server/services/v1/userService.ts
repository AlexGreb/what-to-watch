import {ILoginData, IUser} from "../../Models/user";
import * as db from "../../database/user";
import mongodb from "mongodb";

export const getUser = async (user: ILoginData): Promise<IUser | null> => {
    try {
        return await db.getUser(user);
    } catch (error) {
        throw error
    }
}

export const saveUser = async (user: ILoginData): Promise<IUser> => {
    try {
        return await db.saveUser(user);
    } catch (error) {
        throw error
    }
}

// export const createUserCollection = async (): Promise<mongodb.Collection<IUser>> => {
//     return await db.createUserCollection()
// }
