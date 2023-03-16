import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Spinner from '../../../../../shared/Spinner/Spinner';
import { registerNewUser, selectAuthSlice } from '../../auth-slice';
import { AuthFormContainer, AuthStatusFeedback } from '../authForms-style';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { status, authMsg, authStatus } = useAppSelector(selectAuthSlice);

  const formFeedback = () => {
    switch (authStatus) {
      case 'success':
        return (
          <AuthStatusFeedback authStatus="success">
            <span>You have successfully registered!</span>
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
            <span>
              To be able to use the app, you need to create an account.
            </span>
          </AuthStatusFeedback>
        );
    }
  };

  return (
    <>
      {formFeedback()}
      <AuthFormContainer
        data-testid="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(registerNewUser(e.currentTarget));
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
              data-testid="email"
              required
              autoComplete="off"
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password"
              required
              minLength={6}
              maxLength={25}
              placeholder="Password"
            />
            <button
              type="submit"
              data-testid="submit-btn"
              className="submit-btn"
            >
              Sign Up
            </button>
          </>
        )}
      </AuthFormContainer>
    </>
  );
};

export default RegisterForm;
