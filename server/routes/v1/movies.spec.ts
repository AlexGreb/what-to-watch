import supertest from 'supertest';
import app, {server} from "../../server";
import {connectDB, disconnectDB, dropCollections} from "../../database/connect";
import {MovieModel} from "../../Models/movie";
import {getFakeMovie} from "../../mocks/movies";
import {IMovie} from "../../types";

const request = supertest(app);
const baseUrl = '/api/v1/';
describe('Movies controller', () => {
    beforeAll(async () => {
        await connectDB();
    });

    afterAll(async () => {
        await disconnectDB();
        await server.close();
    });

    afterEach(async () => {
        await dropCollections();
    });

    describe('get movies',  () => {
        it('200 success', async () => {
            const movie: IMovie = getFakeMovie();
            const movieModel = await new MovieModel(movie);
            await movieModel.save();
            const res = await request.get(`${baseUrl}movies`);
            expect(res.status).toBe(200);
        });
    });

    describe('get movie',  () => {
        it('200 success', async () => {
            const movie: IMovie = getFakeMovie();
            const movieModel = await new MovieModel(movie);
            await movieModel.save();
            const res = await request.get(`${baseUrl}movies/${movie.id}`);
            expect(res.status).toBe(200);
        });

        it('404 not found', async () => {
            const res = await request.get(`${baseUrl}movies/1`);
            expect(res.status).toBe(404);
        });
    });

    describe('get promo',  () => {
        it('200 success', async () => {
            const movie: IMovie = getFakeMovie();
            const movieModel = await new MovieModel(movie);
            await movieModel.save();
            const res = await request.get(`${baseUrl}promo`);
            expect(res.status).toBe(200);
        });

        it('404 not found', async () => {
            const res = await request.get(`${baseUrl}promo`);
            expect(res.status).toBe(404);
        });
    });
});
