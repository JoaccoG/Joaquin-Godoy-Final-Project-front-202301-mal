import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Spinner from '../spinner/spinner';
import { registerNewUser, selectRegisterForm } from './registerFormSlice';
import {
  AuthFormContainer,
  AuthStatusFeedback,
} from '../../shared/auth/authFormsStyle';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { status, registerStatus } = useAppSelector(selectRegisterForm);

  const formFeedback = () => {
    switch (registerStatus) {
      case 'success':
        return (
          <AuthStatusFeedback authStatus="success">
            <span>You have successfully registered!</span>
          </AuthStatusFeedback>
        );
      case 'error409':
        return (
          <AuthStatusFeedback authStatus="error409">
            <span>That email is already registered.</span>
          </AuthStatusFeedback>
        );
      case 'error':
        return (
          <AuthStatusFeedback authStatus="error">
            <span>
              There was an error during the registration, please try again
              later.
            </span>
          </AuthStatusFeedback>
        );
      default:
        return (
          <AuthStatusFeedback authStatus="idle">
            Welcome to PlayersNation! Let's begin the adventure.
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
