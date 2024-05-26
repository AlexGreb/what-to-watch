import type {ResponseData} from "../../types";
import type {IMovie} from "../../Models/movie";
import type {Request, Response} from "express";
import * as movieService from "../../services/v1/movieService";
import {getFavoriteMovies} from "../../services/v1/favoriteService";
import {getResError, setFavoriteMovies} from "../../utils"
import {validationResult} from "express-validator";

export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.status(404).json({
                status: 'FAILED',
                data: {
                    error: errors,
                }
            })
        }
        const movies: IMovie[] = await movieService.getAllMovies();
        const favoriteMovies = await getFavoriteMovies(Number(req.params.userId));
        const moviesWithFavoriteUser = setFavoriteMovies(favoriteMovies, movies);
        const data: ResponseData<IMovie[]> = {
            status: 'OK',
            data: moviesWithFavoriteUser
        }
        res.json(data);
    } catch(error: unknown) {
        const {status, data} = getResError(error);
        res.status(status).json({
            status: 'FAILED',
            data
        });
    }
}

export const getMovie = async (req: Request, res: Response): Promise<void> => {
    const {params} = req;
    if(!params.movieId) return;
    try {
        const movie: IMovie | null = await movieService.getMovie(Number(params.movieId));

        if(movie) {
            res.status(200).json({
                status: 'OK',
                data: movie,
            })
        } else {
            res.status(404).json({
                status: 'FAILED',
                data: {
                    error: "Movie with this movieId wasn`t found",
                }
            })
        }
    } catch(error) {
        const {status, data} = getResError(error);
        res.status(status).json({
            status: 'FAILED',
            data
        });
    }
}

export const getPromo = async (req: Request, res: Response): Promise<void> =>{
    try {
        const promo: IMovie | null = await movieService.getPromo();
        res.json({
            status: 'OK',
            data: promo
        });
    } catch(error) {
        const {status, data} = getResError(error);
        res.status(status).json({
            status: 'FAILED',
            data
        });
    }
}
