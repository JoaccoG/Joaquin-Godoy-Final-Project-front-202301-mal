export const getUserById = async (userId: string) => {
  const apiRes = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return apiRes;
};

export const getPostsByUserId = async (
  userId: string,
  offset: number,
  limit: number
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/users/${userId}/posts?offset=${offset}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const addFollower = async (userId: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/users/${userId}/followers`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const removeFollower = async (userId: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/users/${userId}/followers`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};
