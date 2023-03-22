import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('accessToken') !== null;
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={`/auth?redirect=${location}`}
        replace={true}
        state={{ from: location }}
      />
    );
  }

  return children;
};

export default RequireAuth;
