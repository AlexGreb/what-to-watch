import type {IFavoriteMovies, IMovie, MovieId} from "../../Models/movie";
import * as db from '../../database/movie';

export const getAllMovies = async (): Promise<IMovie[]> => {
    try {
        return await db.getAllMovies();
    } catch (error) {
        throw error
    }
}

export const getMovie = async (movieId: MovieId): Promise<IMovie | null> => {
    try {
        return await db.getMovie(movieId);
    } catch (error) {
        throw error
    }
}

export const getPromo = async (): Promise<IMovie | null> =>{
    try {
        return await db.getPromo();
    } catch (error) {
        throw error
    }
}

