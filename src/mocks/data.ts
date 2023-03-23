import { Game } from '../models/game-model';
import { Post } from '../models/post-model';
import { User } from '../models/user-model';

export const mockedPosts: Post[] = [
  {
    _id: 'post-1',
    user: 'user-1' as unknown as User,
    game: 'game-1' as unknown as Game,
    review: 'This is a review',
    rating: 4,
    photo: '',
    date: 1234567890,
  },
  {
    _id: 'post-2',
    user: 'user-2' as unknown as User,
    game: 'game-2' as unknown as Game,
    review: 'This is another review',
    rating: 3,
    photo: 'test.png',
    date: 1234567890,
  },
];
