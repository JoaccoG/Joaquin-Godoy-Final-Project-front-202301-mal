import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../models/models';
import { Post, PostForm, PostResponse } from '../../models/post-model';
import { createPost, getPosts } from './posts-api';

interface PostsState {
  status: Status;
  posts: Post[];
}

const initialState: PostsState = {
  status: 'idle',
  posts: [],
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
  async (post: HTMLFormElement) => {
    const formData = new FormData(post);
    const newPost = Object.fromEntries(formData.entries());

    const apiRes = await createPost(newPost as unknown as PostForm);
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
          state.posts = [...state.posts, ...action.payload];
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
        }
      )
      .addCase(createNewPost.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
