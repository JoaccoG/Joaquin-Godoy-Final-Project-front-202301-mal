import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { HeaderButton, HeaderContainer } from './header-styled';
import { Link } from 'react-router-dom';
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
        className={isOpen ? 'active' : ''}
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
              <Link to={'./'}>
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('house')}
                />
                <p className="active">Home</p>
              </Link>
            </li>
            <li className="links-list__link-item">
              <Link to={'./'}>
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('user')}
                />
                <p>Profile</p>
              </Link>
            </li>
            <li className="links-list__link-item">
              <Link to={'./'}>
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('gamepad')}
                />
                <p>Games</p>
              </Link>
            </li>
            <li className="links-list__link-item">
              <Link to={'./'}>
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('chart-simple')}
                />
                <p>Statistics</p>
              </Link>
            </li>
            <li className="links-list__link-item">
              <Link to={'./'}>
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('bell')}
                />
                <p>Notifications</p>
              </Link>
            </li>
            <li className="links-list__link-item">
              <Link to={'./'}>
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('comments')}
                />
                <p>Messages</p>
              </Link>
            </li>
            <li className="links-list__link-item">
              <Link to={'./'}>
                <FontAwesomeIcon
                  className="link-item__icon"
                  icon={solid('circle-info')}
                />
                <p>Contact</p>
              </Link>
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
