import { Schema, model } from 'mongoose';
import {IUser} from "./user";

type User = {
    id: number;
    name: string
}

export interface IReview {
    id: number;
    user: User;
    rating: number;
    comment: string;
}

export type MovieReviews = Array<IReview>;

export interface IMovieReviews {
    movieId: number;
    reviews: MovieReviews
}

const MovieReviewsScheme = new Schema({
    movieId: {type: Number, unique: true, required: true},
    reviews: [{
        id: {type: Number, unique: true, required: true},
        user: {
            id: {type: Number, unique: true, required: true},
            name: {type: String, unique: true, required: true}
        },
        rating: {type: String, required: true},
        comment: {type: String, required: true}
    }]
})

export const MovieReviewsModel = model<IMovieReviews>('reviews', MovieReviewsScheme);

