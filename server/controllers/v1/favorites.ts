import {Request, Response} from "express";
import {IMovie} from "../../Models/movie";
import * as favoriteService from "../../services/v1/favoriteService";
import {getResError} from "../../utils";
import {validationResult} from "express-validator";

export const getFavoriteMovies = async (req: Request, res: Response) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(404).json({
                status: 'FAILED',
                data: {
                    error: errors,
                }
            })
        }

        const {params} = req;
        if(!params.userId) return;
        const movies:Array<IMovie> = await favoriteService.getFavoriteMovies(Number(params.userId));
        res.json({
            status: 'OK',
            data: movies
        });
    } catch(error) {
        const {status, data} = getResError(error);
        res.status(status).json({
            status: 'FAILED',
            data
        });
    }
}

export const setFavoriteMovie = async (req: Request, res: Response) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(404).json({
                status: 'FAILED',
                data: {
                    error: errors,
                }
            })
        }
        const {userId, movieId} = req.body;
        const movie: IMovie | null = await favoriteService.setFavoriteMovie(userId, Number(movieId));
        res.json({
            status: 'OK',
            data: movie
        });
    } catch(error) {
        const {status, data} = getResError(error);
        res.status(status).json({
            status: 'FAILED',
            data
        });
    }
}

export const removeFavoriteMovie = async (req: Request, res: Response) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(404).json({
                status: 'FAILED',
                data: {
                    error: errors,
                }
            })
        }
        const {userId, movieId} = req.body;
        const movie: IMovie | null = await favoriteService.removeFavoriteMovie(userId, Number(movieId));
        res.json({
            status: 'OK',
            data: movie
        });
    } catch(error) {
        const {status, data} = getResError(error);
        res.status(status).json({
            status: 'FAILED',
            data
        });
    }
}
