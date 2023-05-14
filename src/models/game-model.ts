import { Post } from './post-model';

export interface Game {
  _id: string;
  name: string;
  banner: string;
  description: string;
  launch: Date;
  studio: string;
  mode: string;
  rating: number;
  tags: string[];
  posts: Post[];
}

export interface GamesGetResponse {
  msg: string;
  count: number;
  games: Pick<Game, '_id' | 'name' | 'banner'>[];
}
