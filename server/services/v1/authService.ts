import config from "config";
import {IUser} from "../../Models/user";
import jwt from "jsonwebtoken";


type SecretKey = string;
export const getAccessToken = (user: IUser) => {
    const payload: Omit<IUser, 'password'> = {
        email: user.email
    }
    const secretKey: SecretKey = config.get<SecretKey>('secret');
    return jwt.sign(payload, secretKey, { expiresIn: '24h' });
}

export const getRefreshToken = (user: IUser) => {
    const payload: Omit<IUser, 'password'> = {
        email: user.email
    }
    const secretKey: SecretKey = config.get<SecretKey>('secret');
    return jwt.sign(payload, secretKey, { expiresIn: '170d' });
}
