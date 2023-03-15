import { UserCredentials } from './auth-slice';

export const registerUser = async (newUser: UserCredentials) => {
  const response = await fetch(
    'https://joaquin-godoy-final-project-back-202301.onrender.com/auth/register',
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
  const response = await fetch(
    'https://joaquin-godoy-final-project-back-202301.onrender.com/auth/login',
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
