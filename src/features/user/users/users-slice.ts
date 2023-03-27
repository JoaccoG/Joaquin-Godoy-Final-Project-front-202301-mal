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
  userPosts: Post[];
  userPostsCount: number;
  getOneUserStatus: RequestStatus;
  getUserPostsStatus: RequestStatus;
}

const initialState: UsersState = {
  status: 'idle',
  user: {} as UserProfile,
  userPosts: [],
  userPostsCount: 0,
  getOneUserStatus: 'idle',
  getUserPostsStatus: 'idle',
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

export const getPostsByUser = createAsyncThunk(
  'usersSlice/getPostsByUser',
  async ({
    userId,
    offset,
    limit,
  }: {
    userId: string;
    offset: number;
    limit: number;
  }) => {
    const apiRes = await getPostsByUserId(userId, offset, limit);
    const data: UserPostsResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
  }
);

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    resetStates: (state) => {
      state.user = {} as UserProfile;
      state.userPosts = [];
      state.userPostsCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get one user cases
      .addCase(getOneUser.pending, (state) => {
        state.status = 'loading';
        state.getOneUserStatus = 'loading';
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
      })

      // Get posts by user cases
      .addCase(getPostsByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getPostsByUser.fulfilled,
        (state, action: PayloadAction<UserPostsResponse>) => {
          state.status = 'idle';
          state.getUserPostsStatus = 'success';
          state.userPosts.push(...action.payload.posts);
          state.userPostsCount = action.payload.count;
        }
      )
      .addCase(getPostsByUser.rejected, (state) => {
        state.status = 'failed';
        state.getUserPostsStatus = 'error';
      });
  },
});

export const selectUserSlice = (state: RootState) => state.users;
export const { resetStates } = usersSlice.actions;

export default usersSlice.reducer;
