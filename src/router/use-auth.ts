import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/auth');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const accessToken = sessionStorage.getItem('accessToken');

      if (!accessToken) {
        const currentPath = window.location.pathname;
        sessionStorage.setItem('redirectPath', currentPath);
        setRedirectPath('/auth');
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/token-validation`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        sessionStorage.removeItem('accessToken');
      }

      const redirectPath = sessionStorage.getItem('redirectPath') || '/';
      sessionStorage.removeItem('redirectPath');
      setRedirectPath(redirectPath);
      setIsAuthenticated(true);
      setIsLoading(false);
    };

    validateToken();
  }, []);

  return { isAuthenticated, redirectPath, isLoading };
};

export default useAuth;
