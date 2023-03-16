import styled from 'styled-components';

interface HeaderProps {
  isHeaderOpen: boolean;
}

export const HeaderButton = styled.button`
  position: fixed;
  z-index: 999;
  top: var(--margin-xxs);
  right: var(--margin-s);
  border: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  .hamburger-btn__line {
    width: 55px;
    height: 6px;
    display: block;
    margin: var(--margin-xs) 0;
    background-color: var(--color-primary);
    border-radius: var(--border-xs);
    transition: var(--transition-long);
    -o-transition: var(--transition-long);
    -webkit-transition: var(--transition-long);
  }
  &.active .hamburger-btn__line:nth-child(1) {
    transform: translateY(18px) rotate(45deg);
    -o-transform: translateY(18px) rotate(45deg);
    -ms-transform: translateY(18px) rotate(45deg);
    -webkit-transform: translateY(18px) rotate(45deg);
  }
  &.active .hamburger-btn__line:nth-child(2) {
    opacity: 0;
  }
  &.active .hamburger-btn__line:nth-child(3) {
    transform: translateY(-18px) rotate(-45deg);
    -o-transform: translateY(-18px) rotate(-45deg);
    -ms-transform: translateY(-18px) rotate(-45deg);
    -webkit-transform: translateY(-18px) rotate(-45deg);
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  ${({ isHeaderOpen }: HeaderProps) =>
    isHeaderOpen
      ? `
    right: 0;
  `
      : `
    right: 100%;
  `}
  transition: var(--transition-long);
  .header__title {
    display: none;
    color: var(--color-tertiary);
    font-size: var(--font-size-xxl);
    font-family: var(--font-family-ubuntu-bold);
  }
  .header__navbar {
    width: 100%;
    height: 100%;
    transition: var(--transition-long);
    .header-navbar__links-list {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      gap: var(--margin-s);
      padding: var(--padding-xxxl) 0;
      background-color: var(--bg-solid-opacity-tertiary);
      @supports ((backdrop-filter: none) or (-webkit-backdrop-filter: none;)) {
        background-color: var(--bg-solid-opacity-primary);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }
      .links-list__link-item {
        width: 245px;
        display: flex;
        align-items: center;
        gap: var(--margin-xxl);
        .link-item__icon {
          width: 45px;
          height: 45px;
          font-size: var(--font-size-xl);
          color: var(--color-tertiary);
        }
        a {
          font-size: var(--font-size-s);
          color: var(--color-primary);
          border-bottom: 3px solid transparent;
          line-height: var(--font-size-xxl);
        }
        .active {
          font-family: var(--font-family-inter-bold);
          border-bottom: 3px solid var(--color-tertiary);
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 300px;
    left: 0;
    background-color: var(--bg-color-secondary);
    padding: var(--padding-s);
    .header__title {
      display: block;
    }
    .header__navbar {
      .header-navbar__links-list {
        background-color: transparent;
        .links-list__link-item {
          width: 80%;
          .link-item__icon {
            font-size: var(--font-size-xxl);
          }
          a {
            font-size: var(--font-size-m);
          }
        }
      }
    }
  }
`;
