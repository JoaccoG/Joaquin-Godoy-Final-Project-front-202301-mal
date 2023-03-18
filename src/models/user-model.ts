import { Post } from './post-model';
import { Game } from './game-model';

export interface User {
  email: string;
  password: string;
  username: string;
  name: string;
  surname: string;
  avatar: string;
  biography: string;
  posts: Post[];
  followers: User[];
  following: User[];
  favGames: Game[];
}

export type UserCredentials = Pick<User, 'email' | 'password'>;
