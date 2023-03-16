import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Spinner from '../../../../../shared/Spinner/Spinner';
import { loginNewUser, selectAuthSlice } from '../../auth-slice';
import { AuthFormContainer, AuthStatusFeedback } from '../authForms-style';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { status, authMsg, authStatus } = useAppSelector(selectAuthSlice);

  const formFeedback = () => {
    switch (authStatus) {
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
            <span>{authMsg}</span>
          </AuthStatusFeedback>
        );
      default:
        return (
          <AuthStatusFeedback authStatus="idle">
            <span>Welcome to PlayersNation! Let's begin the adventure.</span>
            <span>To be able to use the app, you need to log in.</span>
          </AuthStatusFeedback>
        );
    }
  };

  return (
    <>
      {formFeedback()}
      <AuthFormContainer
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(loginNewUser(e.currentTarget));
        }}
      >
        {status === 'loading' ? (
          <Spinner color="tertiary" size={150} />
        ) : (
          <>
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
