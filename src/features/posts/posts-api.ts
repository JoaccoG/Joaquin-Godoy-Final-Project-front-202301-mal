import { PostForm } from '../../models/post-model';

export const getPosts = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
  });

  return response;
};

export const createPost = async (post: PostForm) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
    },
    body: JSON.stringify(post),
  });

  return response;
};
