import { Outlet } from 'react-router-dom';
import { Main } from './layout-styled';

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
