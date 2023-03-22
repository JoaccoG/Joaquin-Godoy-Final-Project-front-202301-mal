import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from '../use-auth';
import Spinner from '../../shared/Loading/Loading';

type ProtectedRouteProps = {
  path: string;
  element: React.ReactNode;
};

const ProtectedRoute = ({ path, element, ...rest }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner size={200} color={'tertiary'} />;
  }

  return isAuthenticated ? (
    <Routes>
      <Route path={path} element={element} {...rest} />
    </Routes>
  ) : (
    <Navigate to="/auth" replace />
  );
};

export default ProtectedRoute;
