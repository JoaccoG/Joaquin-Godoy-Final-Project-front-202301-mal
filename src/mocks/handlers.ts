import { rest } from 'msw';
import { mockedGames, mockedPosts, mockedUsers } from './data';

export const handlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/posts`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ msg: 'Successfully get posts', posts: mockedPosts })
      );
    }
  ),

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

  rest.delete(
    `${process.env.REACT_APP_API_URL}/api/v1/posts/${mockedPosts[0]._id}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          msg: 'Post successfully deleted',
          post: mockedPosts[0]._id,
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/users/1234`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          msg: 'Successfully fetched user data',
          user: mockedUsers[0],
          followersCount: 4,
          followingCount: 2,
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/users/1234/posts`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          msg: 'Successfully fetched user posts',
          posts: mockedPosts,
          postsCount: 2,
        })
      );
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}/api/v1/users/1234/followers`,
    async (_req, res, ctx) => {
      if (sessionStorage.getItem('user') === 'asd123') {
        return res(
          ctx.status(409),
          ctx.json({ msg: 'You cannot follow yourself' })
        );
      }

      return res(
        ctx.status(200),
        ctx.json({ msg: 'Successfully followed user' })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}/api/v1/users/1234/followers`,
    async (_req, res, ctx) => {
      if (sessionStorage.getItem('user') === 'asd1234') {
        return res(
          ctx.status(409),
          ctx.json({ msg: 'You cannot unfollow yourself' })
        );
      }

      return res(
        ctx.status(200),
        ctx.json({ msg: 'Successfully unfollowed user' })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/games`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          msg: 'Successfully fetched games',
          games: mockedGames,
          gamesCount: 2,
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/games/${mockedGames[0]._id}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          msg: 'Successfully fetched games',
          gameData: mockedGames[0],
        })
      );
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

  rest.delete(
    `${process.env.REACT_APP_API_URL}/api/v1/posts/${mockedPosts[1]._id}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          msg: 'Error while deleting post',
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/users/1234`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          msg: 'Error while fetching data',
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/users/1234/posts`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          msg: 'Error while fetching posts',
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/games`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          msg: 'Error while fetching games',
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/games/${mockedGames[0]._id}`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          msg: 'Error while fetching game data',
        })
      );
    }
  ),
];
