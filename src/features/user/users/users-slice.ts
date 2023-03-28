import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { RequestStatus, Status } from '../../../models/models';
import { Post } from '../../../models/post-model';
import {
  UserAddFollowerResponse,
  UserPostsResponse,
  UserProfile,
  UserProfileResponse,
  UserRemoveFollowerResponse,
} from '../../../models/user-model';
import {
  addFollower,
  getPostsByUserId,
  getUserById,
  removeFollower,
} from './users-api';

interface UsersState {
  status: Status;
  user: UserProfile;
  userPosts: Post[];
  userPostsCount: number;
  getOneUserStatus: RequestStatus;
  getUserPostsStatus: RequestStatus;
  followUserStatus: RequestStatus;
}

const initialState: UsersState = {
  status: 'idle',
  user: {} as UserProfile,
  userPosts: [],
  userPostsCount: 0,
  getOneUserStatus: 'idle',
  getUserPostsStatus: 'idle',
  followUserStatus: 'idle',
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
      isFollower: data.isFollower,
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

export const addUserFollower = createAsyncThunk(
  'usersSlice/addUserFollower',
  async (userId: string) => {
    const apiRes = await addFollower(userId);
    const data: UserAddFollowerResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
  }
);

export const removeUserFollower = createAsyncThunk(
  'usersSlice/removeUserFollower',
  async (userId: string) => {
    const apiRes = await removeFollower(userId);
    const data: UserRemoveFollowerResponse = await apiRes.json();

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
      state.followUserStatus = 'idle';
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
          state.getOneUserStatus = 'success';
          state.user = action.payload;
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
      })

      // Add user follower cases
      .addCase(addUserFollower.pending, (state) => {
        state.status = 'loading';
        state.followUserStatus = 'loading';
      })
      .addCase(addUserFollower.fulfilled, (state) => {
        state.status = 'idle';
        state.followUserStatus = 'success';
        state.user.followersCount++;
        state.user.isFollower = true;
      })
      .addCase(addUserFollower.rejected, (state) => {
        state.status = 'failed';
        state.followUserStatus = 'error';
      })

      // Remove user follower cases
      .addCase(removeUserFollower.pending, (state) => {
        state.status = 'loading';
        state.followUserStatus = 'loading';
      })
      .addCase(removeUserFollower.fulfilled, (state) => {
        state.status = 'idle';
        state.followUserStatus = 'success';
        state.user.followersCount--;
        state.user.isFollower = false;
      })
      .addCase(removeUserFollower.rejected, (state) => {
        state.status = 'failed';
        state.followUserStatus = 'error';
      });
  },
});

export const selectUserSlice = (state: RootState) => state.users;
export const { resetStates } = usersSlice.actions;

export default usersSlice.reducer;
