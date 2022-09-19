import * as React from "react";
import { LoginValidationType } from ".";
import { InitialLoginState } from "./reducer";

export type LoginContextType = {
  data: InitialLoginState;
  isValid: LoginValidationType;
  usernameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: () => void;
};
const LoginContex = React.createContext<LoginContextType>(
  {} as LoginContextType
);

export default LoginContex;
