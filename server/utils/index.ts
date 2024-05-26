import {ErrorException} from "../types";
import exp from "constants";
import {IMovie} from "../Models/movie";

export const isErrorException = (error: unknown | string): error is ErrorException => {
    return (
        typeof error !== "string" &&
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        'status' in error
    )
}

export const getResError = (error: unknown, resStatus?: number) => {
    let status = resStatus || 500;
    let data = {
        error
    }
    if(isErrorException(error)) {
        status = error.status;
        data.error = error.message
    }
    return {
        status,
        data
    }
}

export const setFavoriteMovies = (favoriteMovieList:Array<IMovie>, movies: Array<IMovie>): Array<IMovie> => {
    const favoriteIds: Set<number> = new Set();
    favoriteMovieList.forEach((it) => {
        favoriteIds.add(it.id)
    })

    return movies.map((it) => {
        it.isFavorite = favoriteIds.has(it.id);
        return it;
    })
}
