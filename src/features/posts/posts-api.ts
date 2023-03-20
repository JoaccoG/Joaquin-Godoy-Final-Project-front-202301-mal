export const getPosts = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/posts`,
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
