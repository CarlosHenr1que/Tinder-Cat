import {rest} from 'msw';
import {breeds} from '../mocks/breeds';
import {API_URL} from '@env';

export const handlers = [
  rest.get(`${API_URL}/breeds`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(breeds));
  }),
];
