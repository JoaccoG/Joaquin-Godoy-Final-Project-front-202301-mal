import { Post } from '../models/post-model';
import { User } from '../models/user-model';

export const mockedUsers: User[] = [
  {
    _id: 'user-1',
    email: 'user-1@test.com',
    password: 'password-1',
    username: 'user-1',
    name: 'User 1',
    surname: 'Surname 1',
    avatar: 'Avatar 1',
    biography: 'Bio 1',
    favGames: [],
    followers: [],
    following: [],
    posts: [],
  },
  {
    _id: 'user-2',
    email: 'user-2@test.com',
    password: 'password-2',
    username: 'user-2',
    name: 'User 2',
    surname: 'Surname 2',
    avatar: 'Avatar 2',
    biography: 'Bio 2',
    favGames: [],
    followers: [],
    following: [],
    posts: [],
  },
];

export const mockedPosts: Post[] = [
  {
    _id: 'post-1',
    user: mockedUsers[0],
    game: {
      _id: 'game-1',
      name: 'Game 1',
      banner: '',
      description: 'Game description',
      launch: '2021-01-01' as unknown as Date,
      studio: 'studio-1',
      mode: 'singleplayer',
      rating: 4,
      tags: ['tag-1-1', 'tag-1-2', 'tage-1-3'],
      posts: [],
    },
    review: 'This is a review',
    rating: 4,
    photo: '',
    date: 1234567890,
  },
  {
    _id: 'post-2',
    user: mockedUsers[1],
    game: {
      _id: 'game-2',
      name: 'Game 2',
      banner: '',
      description: 'Game description',
      launch: '2022-02-02' as unknown as Date,
      studio: 'studio-2',
      mode: 'multiplayer',
      rating: 3,
      tags: ['tag-2-1', 'tag-2-2', 'tage-2-3'],
      posts: [],
    },
    review: 'This is another review',
    rating: 3,
    photo: 'test.png',
    date: 1234567890,
  },
];

export const mockedGames = [
  {
    _id: 'game-1',
    name: 'Game 1',
    banner: '',
  },
  {
    _id: 'game-2',
    name: 'Game 2',
    banner: '',
  },
];
