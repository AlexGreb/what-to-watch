import {FavoriteMoviesModel, type IMovie, MovieModel} from "../Models/movie";

export const getFavoriteMovies = async (userId: number) => {
    try {
        return await FavoriteMoviesModel.findOne({}, {_id: 0}).exec();
    } catch (error) {
        throw { status: 500, message: error}
    }
}

export const setFavoriteMovie = async (userId: string, movieId: number): Promise<IMovie | null> => {
    try {
        const movie = await MovieModel.findOne({id: movieId}, {_id: 0}).exec();
        if(movie) {
            let user = await FavoriteMoviesModel.findOne({_id:userId});
            const isIncludeMovie = user?.movies.find(it => it.id === movieId);
            if(!isIncludeMovie) {
                const movies = user ? [...user.movies, movie] : [movie];
                await FavoriteMoviesModel.findOneAndUpdate(
                    { _id: userId},
                    {
                        movies: movies
                    }, {
                        new: true,
                        upsert: true
                    }
                ).exec();

                return movie
            }
            return movie;

        }
        return null;

    } catch (error) {
        throw { status: 500, message: error}
    }
}

export const removeFavoriteMovie = async (userId: string, movieId: number): Promise<IMovie | null> => {
    try {
        const movie = await MovieModel.findOne({id: movieId}, {_id: 0}).exec();
        if(movie) {
            let user = await FavoriteMoviesModel.findOne({_id:userId});
            const movies = user?.movies.filter((it) => it.id !== movieId);
            await FavoriteMoviesModel.findOneAndUpdate(
                { _id: userId},
                {
                    movies
                }
            );
            return movie;
        }
        return null;

    } catch (error) {
        throw { status: 500, message: error}
    }
}
