import { Game } from '../models/game-model';
import { Post } from '../models/post-model';
import { User } from '../models/user-model';

export const mockedPosts: Post[] = [
  {
    user: 'user-1' as unknown as User,
    game: 'game-1' as unknown as Game,
    review: 'This is a review',
    rating: 4,
    photo: '',
    likes: 0,
    date: new Date('2021-01-01'),
    formattedDate: '01/01/2021',
  },
  {
    user: 'user-2' as unknown as User,
    game: 'game-2' as unknown as User,
    review: 'This is another review',
    rating: 3,
    photo: '',
    likes: 2,
    date: new Date('2021-01-02'),
    formattedDate: '02/01/2021',
  },
];
