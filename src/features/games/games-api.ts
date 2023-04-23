export const getGames = async (offset: number, limit: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/games?offset=${offset}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};

export const getGameById = async (gameId: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/games/${gameId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response;
};
