import { Schema, model } from 'mongoose';

export interface IMovie {
    name: string
    posterImage: string
    previewImage: string
    backgroundImage: string
    backgroundColor: string
    description: string
    rating: number
    scoresCount: number
    director: string
    starring: string[]
    runTime: number
    genre: string
    released: number
    id: number
    isFavorite: boolean
    videoLink: string
    previewVideoLink: string
}

export interface IFavoriteMovies {
    userId: number;
    movies: Array<IMovie>
}

export type MovieId = IMovie['id'];

const movieSchema = new Schema<IMovie>({
    name: { type: String, required: true },
    posterImage: { type: String, required: true },
    previewImage: { type: String, required: true },
    backgroundImage: { type: String, required: true },
    backgroundColor: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    scoresCount: { type: Number, required: true },
    director: { type: String, required: true },
    starring: [{type: String, required: true }],
    runTime: { type: Number, required: true },
    genre: { type: String, required: true },
    released: { type: Number, required: true },
    id: { type: Number, required: true },
    isFavorite: { type: Boolean, required: true },
    videoLink: { type: String, required: true },
    previewVideoLink: { type: String, required: true },
});

const favoriteMoviesSchema = new Schema<IFavoriteMovies>({
    userId: {type: Number, unique: true, required: true},
    movies: [movieSchema]
})


export const MovieModel = model<IMovie>('Movie', movieSchema);
export const FavoriteMoviesModel = model<IFavoriteMovies>('favoritesMovies', favoriteMoviesSchema);
