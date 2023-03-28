import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Auth from '../pages/Auth/Auth';
import ErrorsPage from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import RequireAuth from '../shared/RequireAuth/RequireAuth';
import Profile from '../pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
    errorElement: <ErrorsPage />,
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorsPage />,
    children: [
      {
        path: '',
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: 'user/:id',
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default router;
