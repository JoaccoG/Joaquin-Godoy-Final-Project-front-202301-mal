import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Spinner from '../../../../../shared/Loading/Loading';
import { registerNewUser, selectAuthSlice } from '../../auth-slice';
import { AuthFormContainer, AuthStatusFeedback } from '../auth-form-styled';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { status, registerMsg, registerStatus } =
    useAppSelector(selectAuthSlice);

  const formFeedback = () => {
    switch (registerStatus) {
      case 'success':
        return (
          <AuthStatusFeedback authStatus="success">
            <span>You have successfully registered! You may now log in...</span>
          </AuthStatusFeedback>
        );
      case 'error':
        return (
          <AuthStatusFeedback authStatus="error">
            <span>{registerMsg}</span>
          </AuthStatusFeedback>
        );
      default:
        return (
          <AuthStatusFeedback authStatus="idle">
            <span>
              Welcome to PlayersNation! In order to access all of our features,
              you must first create an account. Fill out the registration form
              below to start posting.
            </span>
            <span>
              If you are already registered, click on the login button above to
              sign in.
            </span>
          </AuthStatusFeedback>
        );
    }
  };

  return (
    <>
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
              Sign Up
            </button>
          </>
        )}
      </AuthFormContainer>
    </>
  );
};

export default RegisterForm;
