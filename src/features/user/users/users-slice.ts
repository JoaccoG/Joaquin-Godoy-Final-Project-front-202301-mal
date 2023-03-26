import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { RequestStatus, Status } from '../../../models/models';
import { Post } from '../../../models/post-model';
import {
  UserPostsResponse,
  UserProfile,
  UserProfileResponse,
} from '../../../models/user-model';
import { getPostsByUserId, getUserById } from './users-api';

interface UsersState {
  status: Status;
  user: UserProfile;
  getOneUserStatus: RequestStatus;
  userPosts: Post[];
  userPostsCount: number;
}

const initialState: UsersState = {
  status: 'idle',
  user: {} as UserProfile,
  getOneUserStatus: 'idle',
  userPosts: [],
  userPostsCount: 0,
};

export const getOneUser = createAsyncThunk(
  'usersSlice/getOneUser',
  async (userId: string) => {
    const apiRes = await getUserById(userId);
    const data: UserProfileResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return {
      ...data.user,
      followersCount: data.userFollowersCount,
      followingCount: data.userFollowingCount,
    };
  }
);

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get one user cases
      .addCase(getOneUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getOneUser.fulfilled,
        (state, action: PayloadAction<UserProfile>) => {
          state.status = 'idle';
          state.user = action.payload;
          state.getOneUserStatus = 'success';
        }
      )
      .addCase(getOneUser.rejected, (state) => {
        state.status = 'failed';
        state.getOneUserStatus = 'error';
      });
  },
});

export const selectUserSlice = (state: RootState) => state.users;

export default usersSlice.reducer;
