import { Post } from './post-model';
import { Game } from './game-model';

export interface User {
  _id: string;
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

export interface UserProfile
  extends Omit<User, 'followers' | 'following' | 'posts'> {
  followersCount: number;
  followingCount: number;
}

export interface UserProfileResponse {
  msg: string;
  user: UserProfile;
  followersCount: number;
  followingCount: number;
}

export interface UserPostsResponse {
  msg: string;
  posts: Post[];
  count: number;
}
