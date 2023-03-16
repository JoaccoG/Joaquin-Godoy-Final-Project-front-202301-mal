import { rest } from 'msw';

const API_URL = 'https://joaquin-godoy-final-project-back-202301.onrender.com';

export const handlers = [
  rest.post(`${API_URL}/auth/register`, async (req, res, ctx) => {
    const request = await req.json();
    const { email } = request;

    if (email === 'email@test.com') {
      return res(
        ctx.status(201),
        ctx.json({ msg: 'You have successfully registered!' })
      );
    }

    return res(ctx.status(500), ctx.json({ msg: 'Error while registering' }));
  }),

  rest.post(`${API_URL}/auth/login`, async (req, res, ctx) => {
    const request = await req.json();
    const { email } = request;

    if (email === 'email@test.com') {
      return res(
        ctx.status(201),
        ctx.json({
          msg: 'Successfully logged in! You will now be redirected...',
        })
      );
    }

    return res(ctx.status(500), ctx.json({ msg: 'Error while logging in' }));
  }),
];
