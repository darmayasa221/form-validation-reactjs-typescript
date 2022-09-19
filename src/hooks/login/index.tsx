import * as React from "react";
import LoginContex from "./context";
import loginReducer, { InitialLoginState } from "./reducer";
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
export type NotificationType = {
  notification: boolean;
  message: string;
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
  const [notification, setNotification] = React.useState<NotificationType>({
    message: "",
    notification: false,
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
  const onSubmit = async () => {
    const authentication = (): Promise<string> => {
      return new Promise((resolve, rejects) => {
        setTimeout(() => {
          const users: string | null = localStorage.getItem("_users");
          const usersJson: Array<InitialLoginState> = JSON.parse(users || "[]");
          const auth: boolean = usersJson.every(
            (user) =>
              user.username === login.username &&
              user.password === login.password
          );
          if (auth) {
            resolve("login success");
          }
          rejects("Login Failed");
        }, 3000);
      });
    };
    try {
      setNotification((prev) => ({
        ...prev,
        message: "verifying",
        notification: true,
      }));
      const result: string = await authentication();
      setNotification((prev) => ({
        ...prev,
        message: result,
        notification: true,
      }));
      setTimeout(() => {
        setNotification({ message: "", notification: false });
      }, 2600);
    } catch (error) {
      setNotification((prev) => ({
        ...prev,
        message: error as string,
        notification: true,
      }));
      setTimeout(() => {
        setNotification({ message: "", notification: false });
      }, 2600);
    }
  };
  return (
    <LoginContex.Provider
      value={{
        data: login,
        isValid: validation,
        notification,
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
