import {Router} from "express";
import {login, registration} from "../../controllers/v1/auth";
import {check} from "express-validator";

// TODO
const versionApi = '/api/v1/';
const authRouter = Router();

authRouter.post(`${versionApi}registration`,
    [
        check('email', 'Email не должен быть пустым').notEmpty(),
        check('password', 'Пароль не должен быть пустым').notEmpty(),
        check('name', 'Имя не должен быть пустым').notEmpty()
    ], registration);

authRouter.post(`${versionApi}login`,
    [
        check('email', 'Email не должен быть пустым').notEmpty(),
        check('password', 'Пароль не должен быть пустым').notEmpty()
    ], login);


export {authRouter};
