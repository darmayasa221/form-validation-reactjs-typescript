export type InitialRegisterState = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type ActionTypeRegister =
  | { type: "INPUT_USERNAME"; payload: string }
  | { type: "INPUT_EMAL"; payload: string }
  | { type: "INPUT_PASSWORD"; payload: string }
  | { type: "INPUT_CONFIRM_PASSWORD"; payload: string };

const registerReducer = (
  state: InitialRegisterState,
  action: ActionTypeRegister
): InitialRegisterState => {
  if (action.type === "INPUT_USERNAME") {
    return {
      ...state,
      username: action.payload,
    };
  }
  if (action.type === "INPUT_EMAL") {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === "INPUT_PASSWORD") {
    return {
      ...state,
      password: action.payload,
    };
  }
  if (action.type === "INPUT_CONFIRM_PASSWORD") {
    return {
      ...state,
      confirmPassword: action.payload,
    };
  }
  return {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
};

export default registerReducer;
