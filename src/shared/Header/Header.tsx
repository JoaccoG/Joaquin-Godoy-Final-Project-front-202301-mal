import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { HeaderButton, HeaderContainer } from './header-styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderButton
        className={`${isOpen ? 'active' : ''}`}
        type="button"
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
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('user')}
              />
              <a href="#">Profile</a>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('gamepad')}
              />
              <a href="#">Games</a>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('chart-simple')}
              />
              <a href="#">Statistics</a>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('bell')}
              />
              <a href="#">Notifications</a>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('comments')}
              />
              <a href="#">Messages</a>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('circle-info')}
              />
              <a href="#">Contact</a>
            </li>
            <li className="links-list__link-item">
              <FontAwesomeIcon
                className="link-item__icon"
                icon={solid('right-from-bracket')}
              />
              <a href="#">Log Out</a>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
