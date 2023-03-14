import { rest } from 'msw';

const API_URL = 'https://joaquin-godoy-final-project-back-202301.onrender.com';

export const handlers = [
  rest.post(`${API_URL}/auth/register`, (_req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
