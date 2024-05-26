import {Request, Response} from "express";
import type {MovieReviews} from "../../Models/reviews";
import * as reviewsService from "../../services/v1/reviewsService";
import {getResError} from "../../utils";

export const getMovieReviews = async (req: Request, res: Response): Promise<void> => {
    const {params} = req;
    if(!params.movieId) return;
    try {
        const reviews: MovieReviews | null = await reviewsService.getMovieReviews(Number(params.movieId));
        res.json({
            status: 'OK',
            data: reviews
        });
    } catch (error) {
        const {status, data} = getResError(error);
        res.status(status).json({
            status: 'FAILED',
            data
        });
    }
}
