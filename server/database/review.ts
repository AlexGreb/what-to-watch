import {type IMovieReviews, MovieReviewsModel} from '../Models/reviews';

export const getMovieReviews = async (movieId: number): Promise<IMovieReviews | null> => {
    try {
        return await MovieReviewsModel.findOne({movieId},{ _id: 0, movieId: 0 }).exec();
    } catch (error) {
        throw { status: 500, message: error }
    }
}
