import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import LoginForm from '../../features/Users/Auth/components/LoginForm/LoginForm';
import RegisterForm from '../../features/Users/Auth/components/RegisterForm/RegisterForm';
import { AuthContainer } from './home-style';

const Home = () => {
  const [authType, toggleAuthType] = useState('register');

  return (
    <AuthContainer>
      <h1 className="auth__title">PlayersNation</h1>
      <article className="auth__info">
        <div className="auth-info__item">
          <FontAwesomeIcon icon={solid('people-group')} />
          <p>
            Join a community of passionate people. Share your opinions, rate
            your favourite games and learn from the experience of other users.
          </p>
        </div>
        <div className="auth-info__item">
          <FontAwesomeIcon icon={solid('gamepad')} />
          <p>
            Discover the latest games! Find out what to play by looking at the
            rating and reviews of the video games you are interested in.
          </p>
        </div>
        <div className="auth-info__item">
          <FontAwesomeIcon icon={solid('comments')} />
          <p>
            Chat with your friends whenever you want! Meet people and organise
            upcoming games with your friends to play synchronized.
          </p>
        </div>
      </article>
      <div className="auth__buttons">
        <button
          data-testid="register-button"
          onClick={() => toggleAuthType('register')}
        >
          Register
        </button>
        <button
          data-testid="login-button"
          onClick={() => toggleAuthType('login')}
        >
          Login
        </button>
      </div>
      {authType === 'register' ? <RegisterForm /> : <LoginForm />}
    </AuthContainer>
  );
};

export default Home;
