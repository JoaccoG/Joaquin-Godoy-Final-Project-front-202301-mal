import { User } from './user-model';

export interface Post {
  user: User;
  review: string;
  rating: number;
  photo: string;
  likes: number;
  date: Date;
  formattedDate: string;
}
