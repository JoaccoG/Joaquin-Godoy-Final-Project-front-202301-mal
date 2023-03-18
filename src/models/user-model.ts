import { Post } from './post-model';

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
}
