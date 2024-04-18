import {Router} from "express";
import {getAllMovies, getMovie, getPromo, getComments} from "../../controllers/v1/movies";
import {authMiddleware} from "../../middlewares/authMiddleware";

// TODO
const versionApi = '/api/v1/';
const moviesRouter = Router();

moviesRouter.get(`${versionApi}movies`, [authMiddleware], getAllMovies);

moviesRouter.get(`${versionApi}movies/:movieId`,[authMiddleware], getMovie);

moviesRouter.get(`${versionApi}promo`,[authMiddleware], getPromo)

moviesRouter.get(`${versionApi}comments`, [authMiddleware], getComments)

export {moviesRouter};
