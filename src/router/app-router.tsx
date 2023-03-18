import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Auth from '../pages/Auth/Auth';
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';

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
        element: <Home />,
      },
    ],
  },
]);

export default router;
