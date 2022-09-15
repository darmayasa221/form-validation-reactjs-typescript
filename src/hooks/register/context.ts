import * as React from "react";
import { RegisterValidationType } from ".";
import { InitialRegisterState } from "./reducer";

export type RegisterContextType = {
  data: InitialRegisterState;
  isValid: RegisterValidationType;
  usernameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  passwordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  confirmPassowrdInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: () => void;
};

const RegisterContext = React.createContext<RegisterContextType>(
  {} as RegisterContextType
);

export default RegisterContext;
