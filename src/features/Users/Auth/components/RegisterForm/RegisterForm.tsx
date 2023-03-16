import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Spinner from '../../../../../shared/Spinner/Spinner';
import { registerNewUser, selectAuthSlice } from '../../auth-slice';
import { AuthFormContainer, AuthStatusFeedback } from '../authForms-style';

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
            <span>Create an account and start posting.</span>
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
