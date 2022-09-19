export type InitialLoginState = {
  username: string;
  password: string;
};

export type ActionTypeLogin =
  | { type: "INPUT_USERNAME"; payload: string }
  | { type: "INPUT_PASSWORD"; payload: string };

const loginReducer = (
  state: InitialLoginState,
  action: ActionTypeLogin
): InitialLoginState => {
  if (action.type === "INPUT_USERNAME") {
    return {
      ...state,
      username: action.payload,
    };
  }
  if (action.type === "INPUT_PASSWORD") {
    return {
      ...state,
      password: action.payload,
    };
  }
  return {
    username: "",
    password: "",
  };
};

export default loginReducer;
