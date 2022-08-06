import {rest} from 'msw';
import {breeds} from '../mocks/breeds';
import {API_URL} from '@env';
import {vote} from '../mocks/vote';

export const handlers = [
  rest.get(`${API_URL}/breeds`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(breeds));
  }),
  rest.post(`${API_URL}/votes`, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(vote));
  }),
];
