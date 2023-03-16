import { Outlet } from 'react-router-dom';
import { Main } from './layout-style';

const Layout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
