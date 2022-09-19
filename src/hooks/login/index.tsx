import * as React from "react";
import LoginContex from "./context";
import loginReducer from "./reducer";
import passwordValidation, {
  PasswordValidationType,
} from "./validations/password";
import usernameValidation, {
  UsernameValidationType,
} from "./validations/username";
export type LoginValidationType = {
  usernameValidation: UsernameValidationType;
  passwordValidation: PasswordValidationType;
};

const LoginContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [login, dispatchLogin] = React.useReducer(loginReducer, {
    username: "",
    password: "",
  });
  const [validation, setValidation] = React.useState<LoginValidationType>({
    usernameValidation: {
      isValid: null,
      message: "",
    },
    passwordValidation: {
      isValid: null,
      message: "",
    },
  });
  const onChangeUsername = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const username: UsernameValidationType = usernameValidation(
      event.target.value
    );
    setValidation((prev) => ({ ...prev, usernameValidation: username }));
    dispatchLogin({ type: "INPUT_USERNAME", payload: event.target.value });
  };
  const onChangePassowrd = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const password: PasswordValidationType = passwordValidation(
      event.target.value
    );
    setValidation((prev) => ({ ...prev, passwordValidation: password }));
    dispatchLogin({ type: "INPUT_PASSWORD", payload: event.target.value });
  };
  const onSubmit = () => {
    console.log(login);
  };
  return (
    <LoginContex.Provider
      value={{
        data: login,
        isValid: validation,
        usernameInput: onChangeUsername,
        passwordInput: onChangePassowrd,
        submitHandler: onSubmit,
      }}
    >
      {children}
    </LoginContex.Provider>
  );
};

export default LoginContextProvider;
