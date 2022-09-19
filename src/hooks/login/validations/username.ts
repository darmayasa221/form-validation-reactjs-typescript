import { whiteSpace } from "src/commons/regex";

export type UsernameValidationType = {
  isValid: boolean | null;
  message: string;
};
const usernameValidation = (value: string) => {
  const isValidLengthUsername: boolean = value.length > 0;
  const isHasWhiteSpace: boolean = whiteSpace.test(value);
  const isValid = isValidLengthUsername && !isHasWhiteSpace;
  if (!isValidLengthUsername) {
    return {
      message: "please input Username, Username is empty",
      isValid,
    };
  }
  if (isHasWhiteSpace) {
    return {
      message: "Username can not have containt white space",
      isValid,
    };
  }
  return {
    message: "",
    isValid,
  };
}

export default usernameValidation;