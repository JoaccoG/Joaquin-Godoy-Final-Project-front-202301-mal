import { UserCredentials } from './auth-slice';

export const registerUser = async (newUser: UserCredentials) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }
  );

  return response;
};

export const loginUser = async (newUser: UserCredentials) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  return response;
};
