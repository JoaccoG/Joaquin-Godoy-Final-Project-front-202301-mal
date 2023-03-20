import { rest } from 'msw';
import { mockedPosts } from './data';

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({ msg: 'You have successfully registered!' })
        );
      }

      return res(ctx.status(500), ctx.json({ msg: 'Error while registering' }));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    async (req, res, ctx) => {
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
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/posts`,
    async (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockedPosts));
    }
  ),
];

export const errorHandlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/posts`,
    async (_req, res, ctx) => {
      return res.once(
        ctx.status(400),
        ctx.json({ msg: 'Error while getting posts' })
      );
    }
  ),
];
