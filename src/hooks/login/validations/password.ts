import { whiteSpace } from "src/commons/regex";

export type PasswordValidationType = {
  isValid: boolean | null;
  message: string;
};
const passwordValidation = (value: string) => {
  const isValidLengthPassword: boolean = value.length > 0;
  const isHasWhiteSpace: boolean = whiteSpace.test(value);
  const isValid = isValidLengthPassword && !isHasWhiteSpace;
  if (!isValidLengthPassword) {
    return {
      message: "please input Password, Password is empty",
      isValid,
    };
  }
  if (isHasWhiteSpace) {
    return {
      message: "Password can not have containt white space",
      isValid,
    };
  }
  return {
    message: "",
    isValid,
  };
}

export default passwordValidation