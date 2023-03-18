import { User } from './user-model';
import { Game } from './game-model';

export interface Post {
  user: User;
  game: Game;
  review: string;
  rating: number;
  photo: string;
  likes: number;
  date: Date;
  formattedDate: string;
}

export type PostForm = Pick<Post, 'game' | 'review' | 'rating' | 'photo'>;

export interface PostResponse {
  msg: string;
  post: Post;
}
