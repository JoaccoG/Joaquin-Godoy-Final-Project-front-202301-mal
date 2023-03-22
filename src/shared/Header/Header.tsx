import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { HeaderButton, HeaderContainer } from './header-styled';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuBtnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
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
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('house')}
              />
              <Link className="active" to={'./'}>
                Home
              </Link>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('user')}
              />
              <Link to={'./'}>Profile</Link>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('gamepad')}
              />
              <Link to={'./'}>Games</Link>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('chart-simple')}
              />
              <Link to={'./'}>Statistics</Link>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('bell')}
              />
              <Link to={'./'}>Notifications</Link>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('comments')}
              />
              <Link to={'./'}>Messages</Link>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('circle-info')}
              />
              <Link to={'./'}>Contact</Link>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('right-from-bracket')}
              />
              <Link to={'./auth'} onClick={() => handleLogout()}>
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
