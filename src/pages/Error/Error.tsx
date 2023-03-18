import { Link } from 'react-router-dom';
import { Main } from './error-styled';

const Error = () => {
  return (
    <Main>
      <div className="error__text">
        <span>404</span>
        <h1>Oops! You weren't supposed to see this...</h1>
        <p>
          The page you are looking for might have been removed, had it's name
          changed, is temporarily unavailable or may never existed.
        </p>
        <p>But don't worry! We got you.</p>
        <Link to={'/'}>Go to somewhere safe</Link>
      </div>
      <div className="error__img">
        <img src="/assets/img/404.webp" alt="Geralt of Rivia" />
      </div>
    </Main>
  );
};

export default Error;
