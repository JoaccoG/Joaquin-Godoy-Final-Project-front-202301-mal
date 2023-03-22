import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { loginNewUser, selectAuthSlice } from '../../auth-slice';
import { AuthFormContainer, AuthStatusFeedback } from '../auth-form-styled';
import Spinner from '../../../../../shared/Loading/Loading';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { status, loginMsg, loginStatus } = useAppSelector(selectAuthSlice);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const formFeedback = () => {
    switch (loginStatus) {
      case 'success':
        return (
          <span>Successfully logged in! You will now be redirected...</span>
        );
      case 'error':
        return <span>Error while logging in ({loginMsg})</span>;
      default:
        return (
          <span>
            If you don't have an account yet, please click on the register
            button above to create one.
          </span>
        );
    }
  };

  useEffect(() => {
    if (loginStatus === 'success') {
      navigate(from, { replace: true });
    }
  }, [from, loginStatus, navigate]);

  return (
    <>
      <AuthFormContainer
        data-testid="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginNewUser(e.currentTarget));
        }}
      >
        {status === 'loading' ? (
          <Spinner color="tertiary" size={150} />
        ) : (
          <>
            <AuthStatusFeedback authStatus={loginStatus}>
              <p>
                Welcome back! Please log in to your account to continue posting,
                chatting with friends and using our app and all of it's
                features.
              </p>
              {formFeedback()}
            </AuthStatusFeedback>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              name="password"
              required
              minLength={6}
              maxLength={25}
              placeholder="Password"
            />
            <button type="submit" className="submit-btn">
              Sign In
            </button>
          </>
        )}
      </AuthFormContainer>
    </>
  );
};

export default LoginForm;
