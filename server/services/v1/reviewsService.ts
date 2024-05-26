import * as db from "../../database/review";
import {MovieReviews} from "../../Models/reviews";

export const getMovieReviews = async (movieId: number): Promise<MovieReviews> => {
    try {
        const movieReviews = await db.getMovieReviews(movieId);
        return movieReviews?.reviews || [];
    } catch (error) {
        throw error
    }
}



