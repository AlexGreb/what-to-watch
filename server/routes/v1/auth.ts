import {Router} from "express";
import {login, registration} from "../../controllers/v1/auth";
import {check} from "express-validator";

const authRouter = Router();

authRouter.post(`registration`,
    [
        check('email', 'Email не должен быть пустым').notEmpty(),
        check('password', 'Пароль не должен быть пустым').notEmpty(),
        check('name', 'Имя не должен быть пустым').notEmpty()
    ], registration);

authRouter.post(`login`,
    [
        check('email', 'Email не должен быть пустым').notEmpty(),
        check('password', 'Пароль не должен быть пустым').notEmpty()
    ], login);


export {authRouter};
