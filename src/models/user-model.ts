export interface User {
  email: string;
  password: string;
  name: string;
  surname: string;
  username: string;
  avatar: string;
  biography: string;
  followers: User[];
  following: User[];
}

export type NewUser = Pick<User, 'email' | 'password'>;
