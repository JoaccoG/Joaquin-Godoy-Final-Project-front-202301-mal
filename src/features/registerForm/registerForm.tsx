import { useAppDispatch } from '../../app/hooks';
import { registerNewUser } from './registerFormSlice';
import { RegisterFormContainer } from './registerFormStyle';

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  return (
    <RegisterFormContainer
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(registerNewUser(e.currentTarget));
      }}
    >
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
        min={6}
        max={23}
        placeholder="Password"
      />
      <button type="submit" data-testid="submit-btn" className="submit-btn">
        Sign Up
      </button>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
