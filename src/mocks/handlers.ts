import { rest } from 'msw';

const API_URL = 'https://joaquin-godoy-final-project-back-202301.onrender.com';

export const handlers = [
  rest.post(`${API_URL}/auth/register`, async (req, res, ctx) => {
    const request = await req.json();
    const { email } = request;

    if (email === 'email@test.com') {
      return res(ctx.status(201));
    }

    if (email === 'alreadyRegisteredEmail@test.com') {
      return res(ctx.status(409));
    }

    return res(ctx.status(400));
  }),
];
