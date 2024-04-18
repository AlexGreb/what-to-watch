import type {Request, Response} from "express";
import {IUser} from "../../Models/user";
import {getUser, saveUser} from "../../services/v1/userService"
import {getResError} from "../../utils";
import bcrypt from "bcrypt";
import {validationResult} from "express-validator";
import {getAccessToken} from "../../services/v1/authService";

export const registration = async (req: Request<IUser>, res: Response) => {

    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: errors,
                }
            })
        }
        const {email, password, name} = req.body;
        const userData: IUser = {
            email, password, name
        }
        const candidate = await getUser(userData);
        if(candidate) {
            return res.status(400).json({
                status: 'FAILED',
                data: {
                    error: "A user with this email already exists",
                }
            })
        }

        userData.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const userDB: IUser = await saveUser(userData);
        const accessToken = getAccessToken(userDB);
        return res.status(201).json({
            status: 'OK',
            data: {
                user: {
                    email: userDB.email
                },
                accessToken
            }
        })

    } catch (error) {
        const {status, data} = getResError(error);
        res.status(status).json({
            status: 'FAILED',
            data
        });
    }
}

export const login = async (req: Request<IUser>, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            status: 'FAILED',
            data: {
                error: errors,
            }
        })
    }

    const {email, password} = req.body;
    const user: IUser = {
        email,
        password
    }
    const userDB: IUser | null = await getUser(user);
    if(!userDB) {
        return res.status(400).json({
            status: 'FAILED',
            data: {
                error: `User with ${email} not found`
            }
        })
    }

    const validPassword = bcrypt.compareSync(password, userDB.password);
    if(!validPassword) {
        return res.status(400).json({
            status: 'FAILED',
            data: {
                error: `Incorrect password`
            }
        })
    }

    const accessToken = getAccessToken(userDB);

    return res.status(200).json(
        {
            status: 'OK',
            data: {
                user: {
                    email
                },
                accessToken
            }
        }
    )


}
