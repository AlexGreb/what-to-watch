import express, {type Express} from 'express';
import {moviesRouter} from "./routes/v1/movies";
import {authRouter} from "./routes/v1/auth";
import {Port} from "./types";
import morgan from 'morgan';
import config from 'config';
import cors from 'cors';
import {connectDB} from './database/connect';
import helmet from "helmet";

const port: number = config.get<Port>('port')
const app: Express = express();

if(config.util.getEnv('NODE_ENV') !== 'test') {
    //morgan для вывода логов в консоль
    app.use(morgan('combined')); //'combined' выводит логи в стиле apache
}
app.use(helmet.xssFilter());
app.use(helmet.frameguard())
app.use(cors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type'],
    credentials: true
}))
app.use(express.json());

app.use([moviesRouter, authRouter]);

const server = app.listen(port, async () => {
    if(config.util.getEnv('NODE_ENV') !== 'test') {
        await connectDB();
    }
    console.log(`Server is running http://localhost:${port}`)
})

export {server};
export default app;
