import * as db from "../../database/favorite";
import {IMovie} from "../../Models/movie";

export const getFavoriteMovies = async (userId: number): Promise<Array<IMovie>> => {
    try {
        const favoriteMovies = await db.getFavoriteMovies(userId);
        return favoriteMovies?.movies || []
    } catch (error) {
        throw error
    }
}

export const setFavoriteMovie = async (userId: string, movieId: number): Promise<IMovie | null> => {
    try {
        return await db.setFavoriteMovie(userId, movieId);
    } catch (error) {
        throw error
    }
}

export const removeFavoriteMovie = async (userId: string, movieId: number): Promise<IMovie | null> => {
    try {
        return await db.removeFavoriteMovie(userId, movieId);
    } catch (error) {
        throw error
    }
}
