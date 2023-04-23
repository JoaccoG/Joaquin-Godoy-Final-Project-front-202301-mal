import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Game, GamesGetResponse } from '../../models/game-model';
import { RequestStatus, Status } from '../../models/models';
import { getGames } from './games-api';

interface GamesState {
  status: Status;
  games: Pick<Game, '_id' | 'name' | 'banner'>[];
  gamesCount: number;
  getGamesMsg: string;
  getGamesStatus: RequestStatus;
}

const initialState: GamesState = {
  status: 'idle',
  games: [],
  gamesCount: 0,
  getGamesMsg: '',
  getGamesStatus: 'idle',
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

export const gamesSlice = createSlice({
  name: 'gamesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
        state.status = 'idle';
        state.getGamesStatus = 'error';
        state.getGamesMsg = action.error.message;
      });
  },
});

export const selectGames = (state: RootState) => state.games;

export default gamesSlice.reducer;
