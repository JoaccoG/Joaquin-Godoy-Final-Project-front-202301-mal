import { User } from './user-model';
import { Game } from './game-model';

export interface Post {
  user: User;
  game: Game;
  review: string;
  rating: number;
  photo: string;
  date: number;
}

export type PostForm = Pick<Post, 'game' | 'review' | 'rating' | 'photo'>;

export interface PostsPostResponse {
  msg: string;
  post: Post;
}

export interface PostsGetResponse {
  msg: string;
  posts: Post[];
}
