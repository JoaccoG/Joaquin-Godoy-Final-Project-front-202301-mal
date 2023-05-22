import { Post } from './post-model';

export interface Game {
  _id: string;
  name: string;
  banner: string;
  description: string;
  tags: string[];
  mode: 'singleplayer' | 'multiplayer';
  studio: string;
  launch: Date;
  rating: number;
  posts: Post[];
}

export interface GamesGetResponse {
  msg: string;
  count: number;
  games: Pick<Game, '_id' | 'name' | 'banner'>[];
}

export interface GameGetResponse {
  msg: string;
  gameData: Game;
}
