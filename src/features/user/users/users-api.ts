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
