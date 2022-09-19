import * as React from "react";
import { LoginValidationType, NotificationType } from ".";
import { InitialLoginState } from "./reducer";

export type LoginContextType = {
  data: InitialLoginState;
  isValid: LoginValidationType;
  notification: NotificationType;
  usernameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: () => Promise<void>;
};
const LoginContex = React.createContext<LoginContextType>(
  {} as LoginContextType
);

export default LoginContex;
