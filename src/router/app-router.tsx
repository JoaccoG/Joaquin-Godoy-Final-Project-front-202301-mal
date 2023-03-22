import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Auth from '../pages/Auth/Auth';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import ProtectedRoute from './RoutesProtection/RoutesProtection';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
    errorElement: <Error />,
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <ProtectedRoute path={''} element={<Home />} />,
      },
    ],
  },
]);

export default router;
