import {Router} from "express";
import {getAllMovies, getMovie, getPromo} from "../../controllers/v1/movies";
import {getMovieReviews} from "../../controllers/v1/reviews";
import {authMiddleware} from "../../middlewares/authMiddleware";
import {query} from "express-validator";
import config from "config";

const moviesRouter = Router();
const apiUrl = config.get('apiUrl');
console.log(apiUrl);

moviesRouter.get(`${apiUrl}movies`, [
    authMiddleware,
    query('userId', 'userId is required').notEmpty()
], getAllMovies);

moviesRouter.get(`${apiUrl}movies/:movieId`,[authMiddleware], getMovie);

moviesRouter.get(`${apiUrl}promo`,[authMiddleware], getPromo);

moviesRouter.get(`${apiUrl}reviews/:movieId`, [authMiddleware], getMovieReviews);


export {moviesRouter};
