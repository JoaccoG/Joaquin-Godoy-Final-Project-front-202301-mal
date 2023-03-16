import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import LoginForm from '../../features/users/auth/components/LoginForm/LoginForm';
import RegisterForm from '../../features/users/auth/components/RegisterForm/RegisterForm';
import { AuthContainer } from './home-style';

const Home = () => {
  const [authType, toggleAuthType] = useState('register');
  const [activeButton, setactiveButton] = useState('register');

  const handleButtonClick = (button: string) => {
    toggleAuthType(button);
    setactiveButton(button);
  };

  return (
    <AuthContainer>
      <h1 className="auth__title">PlayersNation</h1>
      <article className="auth__info">
        <div className="auth-info__item">
          <FontAwesomeIcon
            className="auth-info-item__icon"
            icon={solid('people-group')}
          />
          <p>
            <span>Join the most passionate community.</span>
            Share your opinion, rate your favourite videogames and read about
            the experience of other users.
          </p>
        </div>
        <div className="auth-info__item">
          <FontAwesomeIcon
            className="auth-info-item__icon"
            icon={solid('gamepad')}
          />
          <p>
            <span>Discover the latest games.</span>
            Find out what to play by looking at the rating and reviews of the
            videogames you are interested in.
          </p>
        </div>
        <div className="auth-info__item">
          <FontAwesomeIcon
            className="auth-info-item__icon"
            icon={solid('comments')}
          />
          <p>
            <span>Chat all day with your friends.</span>
            Meet people and organise upcoming games with your friends to play
            synchronized and together.
          </p>
        </div>
      </article>
      <div className="auth__buttons">
        <button
          data-testid="register-button"
          onClick={() => handleButtonClick('register')}
          className={
            activeButton === 'register' ? 'auth-buttons__btn--active' : ''
          }
        >
          Register
        </button>
        <button
          data-testid="login-button"
          onClick={() => handleButtonClick('login')}
          className={
            activeButton === 'login' ? 'auth-buttons__btn--active' : ''
          }
        >
          Login
        </button>
      </div>
      {authType === 'register' ? <RegisterForm /> : <LoginForm />}
    </AuthContainer>
  );
};

export default Home;
