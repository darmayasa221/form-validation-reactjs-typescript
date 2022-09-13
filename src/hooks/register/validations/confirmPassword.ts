export type ConfirmPasswordValidationType = {
  isValid: boolean | null;
  message: string;
};

const confirmPasswordValidation = (
  value: string,
  passowrd: string
): ConfirmPasswordValidationType => {
  const isValidLengthConfirmPassword: boolean = value.length > 0;
  const isMatch: boolean = passowrd === value;
  const isValid: boolean = isValidLengthConfirmPassword && isMatch;
  if (!isValidLengthConfirmPassword) {
    return {
      message:
        "please input Confirm Password, Confirm Password should been filled",
      isValid,
    };
  }
  if (!isMatch) {
    return {
      message: "Confirm Password can not match",
      isValid,
    };
  }
  return {
    message: "",
    isValid,
  };
};

export default confirmPasswordValidation;
