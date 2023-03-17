import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Auth from '../pages/Auth/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Auth />,
      },
    ],
  },
]);

export default router;
