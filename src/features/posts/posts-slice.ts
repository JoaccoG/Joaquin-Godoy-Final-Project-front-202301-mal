import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { RequestStatus, Status } from '../../models/models';
import {
  Post,
  PostsDeleteResponse,
  PostsGetResponse,
  PostsPostResponse,
} from '../../models/post-model';
import { createPost, deletePost, getPosts } from './posts-api';

interface PostsState {
  status: Status;
  posts: Post[];
  postsCount: number;
  postCreationStatus: RequestStatus;
  postCreationMsg: string;
  postGetStatus: RequestStatus;
  postGetMsg: string;
  filePreview: string | undefined;
}

const initialState: PostsState = {
  status: 'idle',
  posts: [],
  postsCount: 0,
  postCreationStatus: 'idle',
  postCreationMsg: '',
  postGetStatus: 'idle',
  postGetMsg: '',
  filePreview: '',
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

export const deleteOnePost = createAsyncThunk(
  'postsSlice/deleteOnePost',
  async (postId: string) => {
    const apiRes = await deletePost(postId);
    const data: PostsDeleteResponse = await apiRes.json();

    if (!apiRes.ok) {
      throw new Error(data.msg);
    }

    return data;
  }
);

export const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    uploadFile: (state, action: PayloadAction<string | undefined>) => {
      state.filePreview = action.payload;
    },
    resetPosts: (state) => {
      state.posts = [];
      state.postsCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get posts cases
      .addCase(getAllPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        getAllPosts.fulfilled,
        (state, action: PayloadAction<PostsGetResponse>) => {
          state.status = 'idle';
          state.postsCount = action.payload.count;
          state.posts.push(...action.payload.posts);
          state.postGetStatus = 'success';
        }
      )
      .addCase(getAllPosts.rejected, (state, action: any) => {
        state.status = 'failed';
        state.postGetStatus = 'error';
        state.postGetMsg = action.error.message;
      })

      // Create post cases
      .addCase(createNewPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        createNewPost.fulfilled,
        (state, action: PayloadAction<Post>) => {
          state.status = 'idle';
          state.posts.unshift({ ...action.payload });
          state.postCreationStatus = 'success';
        }
      )
      .addCase(createNewPost.rejected, (state, action: any) => {
        state.status = 'failed';
        state.postCreationStatus = 'error';
        state.postCreationMsg = action.error.message;
      })

      // Delete post cases
      .addCase(deleteOnePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        deleteOnePost.fulfilled,
        (state, action: PayloadAction<PostsDeleteResponse>) => {
          state.status = 'idle';
          /* Mock store with preloaded data for one test to avoid findIndex array method return -1 */
          /* istanbul ignore next */
          const postToDelete = state.posts.findIndex(
            (post) => post._id === action.payload.post
          );
          state.posts.splice(postToDelete, 1);
        }
      )
      .addCase(deleteOnePost.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectPostsSlice = (state: RootState) => state.posts;
export const { uploadFile, resetPosts } = postsSlice.actions;

export default postsSlice.reducer;
