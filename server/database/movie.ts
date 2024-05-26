import {FavoriteMoviesModel, IMovie, MovieId} from "../Models/movie";
import {MovieModel} from "../Models/movie";

export const getAllMovies = async (): Promise<IMovie[]> => {
    try {
        return await MovieModel.find({}, { _id: 0 }).exec();
    } catch (error) {
        throw { status: 500, message: error };
    }
}

export const getMovie = async (movieId: MovieId): Promise<IMovie | null> => {
    try {
        return await MovieModel.findOne({id: movieId}, { _id: 0 }).exec();
    } catch (error) {
        throw { status: 500, message: error }
    }

}

export const getPromo = async (): Promise<IMovie | null> =>{
    try {
        return await MovieModel.findOne({},{ _id: 0 }).exec();
    } catch (error) {
        throw { status: 500, message: error }
    }
}

