import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { HeaderButton, HeaderContainer } from './header-styled';
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { logoutUser } from '../../features/user/auth/auth-slice';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleMenuBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <HeaderButton
        className={isOpen ? 'open' : ''}
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => handleMenuBtnClick()}
      >
        <span className="hamburger-btn__line" />
        <span className="hamburger-btn__line" />
        <span className="hamburger-btn__line" />
      </HeaderButton>
      <HeaderContainer isHeaderOpen={isOpen}>
        <h1 className="header__title">PlayersNation</h1>
        <nav className="header__navbar">
          <ul className="header-navbar__links-list">
            <li className="links-list__link-item">
              <NavLink
                to={'./'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('house')}
                />
                <p>Home</p>
              </NavLink>
            </li>
            <li className="links-list__link-item">
              <NavLink
                to={`./user/${sessionStorage.getItem('user')}`}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('user')}
                />
                <p>Profile</p>
              </NavLink>
            </li>
            <li className="links-list__link-item">
              <NavLink
                to={'./games'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('gamepad')}
                />
                <p>Games</p>
              </NavLink>
            </li>
            <li className="links-list__link-item">
              <NavLink
                to={'./statistics'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('chart-simple')}
                />
                <p>Statistics</p>
              </NavLink>
            </li>
            <li className="links-list__link-item">
              <NavLink
                to={'./notifications'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('bell')}
                />
                <p>Notifications</p>
              </NavLink>
            </li>
            <li className="links-list__link-item">
              <NavLink
                to={'./messages'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('comments')}
                />
                <p>Messages</p>
              </NavLink>
            </li>
            <li className="links-list__link-item">
              <NavLink
                to={'./contact'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('circle-info')}
                />
                <p>Contact</p>
              </NavLink>
            </li>
            <li className="links-list__link-item">
              <Link
                to={'./auth'}
                onClick={() => handleLogout()}
                data-testid="logout-btn"
              >
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('right-from-bracket')}
                />
                <p>Log out</p>
              </Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
