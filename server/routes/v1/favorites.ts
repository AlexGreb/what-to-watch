import {Router} from "express";
import {getFavoriteMovies, removeFavoriteMovie, setFavoriteMovie} from "../../controllers/v1/favorites";
import {authMiddleware} from "../../middlewares/authMiddleware";
import {check} from "express-validator";
import config from "config";
import {Port} from "../../types";

const favoriteRouter = Router();
const apiUrl = config.get('apiUrl');

favoriteRouter.get(`${apiUrl}favorite/:userId`, [
    authMiddleware
], getFavoriteMovies);

favoriteRouter.put(`${apiUrl}favorite`, [
    // authMiddleware,
    check('movieId', 'MovieId не должен быть пустым').notEmpty(),
    check('userId', 'UserID не должен быть пустым').notEmpty(),
], setFavoriteMovie);

favoriteRouter.patch(`${apiUrl}favorite`, [
    authMiddleware,
    check('movieId', 'MovieId не должен быть пустым').notEmpty(),
    check('userId', 'UserID не должен быть пустым').notEmpty(),
], removeFavoriteMovie);

export {favoriteRouter};
