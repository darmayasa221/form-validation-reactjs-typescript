import * as React from "react";
import RegisterContext from "./context";
import registerReducer, { InitialRegisterState } from "./reducer";
import confirmPasswordValidation, {
  ConfirmPasswordValidationType,
} from "./validations/confirmPassword";
import emailValidation, { EmailValidationType } from "./validations/email";
import passwordValidation, {
  PasswordValidationType,
} from "./validations/password";
import usernameValidation, {
  UsernameValidationType,
} from "./validations/username";

export type RegisterValidationType = {
  usernameValidation: UsernameValidationType;
  emailValidation: EmailValidationType;
  passwordValidation: PasswordValidationType;
  confirmPasswordValidation: ConfirmPasswordValidationType;
};

const RegisterContexProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [register, dispatchRegister] = React.useReducer(registerReducer, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validation, setValidation] = React.useState<RegisterValidationType>({
    usernameValidation: {
      isValid: null,
      message: "",
    },
    emailValidation: {
      isValid: null,
      message: "",
    },
    passwordValidation: {
      isValid: null,
      length: false,
      lowerCase: false,
      minLength: false,
      number: false,
      symbol: false,
      upperCase: false,
      whiteSpace: false,
    },
    confirmPasswordValidation: {
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
    dispatchRegister({ type: "INPUT_USERNAME", payload: event.target.value });
  };
  const onChangeEmail = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const email: EmailValidationType = emailValidation(event.target.value);
    setValidation((prev) => ({ ...prev, emailValidation: email }));
    dispatchRegister({ type: "INPUT_EMAL", payload: event.target.value });
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password: PasswordValidationType = passwordValidation(
      event.target.value
    );
    const confirmPassword: ConfirmPasswordValidationType =
      confirmPasswordValidation(event.target.value, register.confirmPassword);
    setValidation((prev) => ({
      ...prev,
      passwordValidation: password,
      confirmPasswordValidation: {
        isValid: confirmPassword.isValid,
        message: "",
      },
    }));
    dispatchRegister({ type: "INPUT_PASSWORD", payload: event.target.value });
  };
  const onChangeConfirmPassword = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const confirmPassword: ConfirmPasswordValidationType =
      confirmPasswordValidation(event.target.value, register.password);
    setValidation((prev) => ({
      ...prev,
      confirmPasswordValidation: confirmPassword,
    }));
    dispatchRegister({
      type: "INPUT_CONFIRM_PASSWORD",
      payload: event.target.value,
    });
  };
  const onSubmit = () => {
    const users: string | null = localStorage.getItem("_users");
    const usersJson: Array<InitialRegisterState> = JSON.parse(users || "[]");
    if (users === null) {
      localStorage.setItem("_users", JSON.stringify([register]));
      return;
    }
    usersJson?.push(register);
    localStorage.clear();
    localStorage.setItem("_users", JSON.stringify(usersJson));
  };
  return (
    <RegisterContext.Provider
      value={{
        data: register,
        isValid: validation,
        usernameInput: onChangeUsername,
        emailInput: onChangeEmail,
        passwordInput: onChangePassword,
        confirmPassowrdInput: onChangeConfirmPassword,
        submitHandler: onSubmit,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContexProvider;
