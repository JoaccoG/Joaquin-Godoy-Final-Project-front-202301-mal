import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  Game,
  GameGetResponse,
  GamesGetResponse,
} from '../../models/game-model';
import { RequestStatus, Status } from '../../models/models';
import { getGameById, getGames } from './games-api';

interface GamesState {
  status: Status;
  game: Game;
  games: Pick<Game, '_id' | 'name' | 'banner'>[];
  gamesCount: number;
  getGamesMsg: string;
  getGamesStatus: RequestStatus;
  getGameMsg: string;
  getGameStatus: RequestStatus;
}

const initialState: GamesState = {
  status: 'idle',
  game: {} as Game,
  games: [],
  gamesCount: 0,
  getGamesMsg: '',
  getGamesStatus: 'idle',
  getGameMsg: '',
  getGameStatus: 'idle',
};

export const getAllGames = createAsyncThunk(
  'gamesSlice/getAllGames',
  async ({ offset, limit }: { offset: number; limit: number }) => {
    const apiRes = await getGames(offset, limit);
    const data: GamesGetResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
  }
);

export const getOneGame = createAsyncThunk(
  'gamesSlice/getOneGame',
  async (gameId: string) => {
    const apiRes = await getGameById(gameId);
    const data: GameGetResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
  }
);

export const gamesSlice = createSlice({
  name: 'gamesSlice',
  initialState,
  reducers: {
    resetGames: (state) => {
      state.games = [];
      state.gamesCount = 0;
      state.getGamesStatus = 'idle';
      state.getGamesMsg = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Get all games cases
      .addCase(getAllGames.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getAllGames.fulfilled,
        (state, action: PayloadAction<GamesGetResponse>) => {
          state.status = 'idle';
          state.getGamesStatus = 'success';
          state.getGamesMsg = action.payload.msg;
          state.gamesCount = action.payload.count;
          state.games.push(...action.payload.games);
        }
      )
      .addCase(getAllGames.rejected, (state, action: any) => {
        state.status = 'failed';
        state.getGamesStatus = 'error';
        state.getGamesMsg = action.error.message;
      })

      // Get one game cases
      .addCase(getOneGame.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getOneGame.fulfilled,
        (state, action: PayloadAction<GameGetResponse>) => {
          state.status = 'idle';
          state.getGameStatus = 'success';
          state.getGameMsg = action.payload.msg;
          state.game = action.payload.game;
        }
      )
      .addCase(getOneGame.rejected, (state, action: any) => {
        state.status = 'failed';
        state.getGameStatus = 'error';
        state.getGameMsg = action.error.message;
      });
  },
});

export const selectGamesSlice = (state: RootState) => state.games;
export const { resetGames } = gamesSlice.actions;

export default gamesSlice.reducer;
