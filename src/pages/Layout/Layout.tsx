import { Outlet } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import { Main } from './layout-styled';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
