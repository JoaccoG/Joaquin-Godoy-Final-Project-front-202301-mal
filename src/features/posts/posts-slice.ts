import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { RequestStatus, Status } from '../../models/models';
import { Post, PostResponse } from '../../models/post-model';
import { createPost, getPosts } from './posts-api';

interface PostsState {
  status: Status;
  posts: Post[];
  postCreationStatus: RequestStatus;
  postCreationMsg: string;
}

const initialState: PostsState = {
  status: 'idle',
  posts: [],
  postCreationStatus: 'idle',
  postCreationMsg: '',
};

export const getAllPosts = createAsyncThunk(
  'postsSlice/getAllPosts',
  async () => {
    const apiRes = await getPosts();
    const data: Post[] = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error('Error while getting posts');
    }

    return data;
  }
);

export const createNewPost = createAsyncThunk(
  'postsSlice/createNewPost',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const apiRes = await createPost(formData);
    const data: PostResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
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
        (state, action: PayloadAction<Post[]>) => {
          state.status = 'idle';
          state.posts = [...action.payload];
        }
      )
      .addCase(getAllPosts.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(createNewPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        createNewPost.fulfilled,
        (state, action: PayloadAction<PostResponse>) => {
          state.status = 'idle';
          state.posts = [action.payload.post, ...state.posts];
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
