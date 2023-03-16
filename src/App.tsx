import { RouterProvider } from 'react-router-dom';
import router from './router/app-router';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
