import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { RequestStatus, Status } from '../../models/models';
import {
  Post,
  PostsGetResponse,
  PostsPostResponse,
} from '../../models/post-model';
import { createPost, getPosts } from './posts-api';

interface PostsState {
  status: Status;
  posts: Post[];
  postsCount: number;
  postCreationStatus: RequestStatus;
  postCreationMsg: string;
  postGetStatus: RequestStatus;
  postGetMsg: string;
}

const initialState: PostsState = {
  status: 'idle',
  posts: [],
  postsCount: 0,
  postCreationStatus: 'idle',
  postCreationMsg: '',
  postGetStatus: 'idle',
  postGetMsg: '',
};

export const getAllPosts = createAsyncThunk(
  'postsSlice/getAllPosts',
  async ({ offset, limit }: { offset: number; limit: number }) => {
    const apiRes = await getPosts(offset, limit);
    const data: PostsGetResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
  }
);

export const createNewPost = createAsyncThunk(
  'postsSlice/createNewPost',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const apiRes = await createPost(formData);
    const data: PostsPostResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data.post;
  }
);

export const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getAllPosts.fulfilled,
        (state, action: PayloadAction<PostsGetResponse>) => {
          state.status = 'idle';
          state.postsCount = action.payload.count;
          state.posts = [...state.posts, ...action.payload.posts];
          state.postGetStatus = 'success';
        }
      )
      .addCase(getAllPosts.rejected, (state, action: any) => {
        state.status = 'failed';
        state.postGetStatus = 'error';
        state.postGetMsg = action.error.message;
      })

      .addCase(createNewPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        createNewPost.fulfilled,
        (state, action: PayloadAction<Post>) => {
          state.status = 'idle';
          state.posts = [action.payload, ...state.posts];
          state.postCreationStatus = 'success';
        }
      )
      .addCase(createNewPost.rejected, (state, action: any) => {
        state.status = 'failed';
        state.postCreationStatus = 'error';
        state.postCreationMsg = action.error.message;
      });
  },
});

export const selectPostsSlice = (state: RootState) => state.posts;

export default postsSlice.reducer;
