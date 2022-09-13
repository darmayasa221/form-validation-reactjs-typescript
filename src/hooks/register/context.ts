import * as React from "react";
import { RegisterValidationType } from ".";
import { InitialRegisterState } from "./reducer";

export type RegisterContextType = {
  data: InitialRegisterState;
  isValid: RegisterValidationType;
  onChangeUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const RegisterContext = React.createContext<RegisterContextType>(
  {} as RegisterContextType
);

export default RegisterContext;
