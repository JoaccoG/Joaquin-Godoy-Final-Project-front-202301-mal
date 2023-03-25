export const getPosts = async (offset: number, limit: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/posts?offset=${offset}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const createPost = async (formData: FormData) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/posts`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      body: formData,
    }
  );

  return response;
};

export const deletePost = async (postId: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/posts/${postId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
    }
  );

  return response;
};
