import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Spinner from '../../../../../shared/Spinner/Spinner';
import { loginNewUser, selectAuthSlice } from '../../auth-slice';
import { AuthFormContainer, AuthStatusFeedback } from '../authForms-style';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { status, loginMsg, loginStatus } = useAppSelector(selectAuthSlice);

  const formFeedback = () => {
    switch (loginStatus) {
      case 'success':
        return (
          <AuthStatusFeedback authStatus="success">
            <span>Successfully logged in! You will now be redirected...</span>
            <Spinner color="tertiary" size={75} />
          </AuthStatusFeedback>
        );
      case 'error':
        return (
          <AuthStatusFeedback authStatus="error">
            <span>{loginMsg}</span>
          </AuthStatusFeedback>
        );
      default:
        return (
          <AuthStatusFeedback authStatus="idle">
            <span>Welcome back! Sign in to use the app.</span>
          </AuthStatusFeedback>
        );
    }
  };

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
            {formFeedback()}
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
