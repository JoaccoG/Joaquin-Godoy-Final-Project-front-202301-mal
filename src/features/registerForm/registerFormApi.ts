import { NewUser } from '../../models/user-model';

export const registerUser = async (newUser: NewUser) => {
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
