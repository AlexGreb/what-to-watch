import type {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import config from "config";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.method === 'OPTION') {
        next();
    }

    try {
        const token = req.headers.authorization?.split(' ')[1];
        if(!token) {
            return res.status(403).json({
                status: 'FAILED',
                data: {
                    error: 'Not authorized'
                }
            })
        }
        const secret = config.get<string>('secret')
        jwt.verify(token, secret);
        next();
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            status: 'FAILED',
            data: {
                error: 'Not authorized'
            }
        })
    }
}
