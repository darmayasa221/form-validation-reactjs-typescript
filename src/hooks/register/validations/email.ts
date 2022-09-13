import { whiteSpace } from "src/commons/regex";

export type EmailValidationType = {
  isValid: boolean | null;
  message: string;
};

const emailValidation = (value: string): EmailValidationType => {
  const isValidLengthEmail: boolean = value.length > 0;
  const isHasWhiteSpace: boolean = whiteSpace.test(value);
  const emailType: boolean = value.includes("@");
  const isValid = isValidLengthEmail && !isHasWhiteSpace && emailType;
  if (!isValidLengthEmail) {
    return {
      message: "please input Email, Email should been filled",
      isValid,
    };
  }
  if (isHasWhiteSpace) {
    return {
      message: "Email can not have containt white space",
      isValid,
    };
  }
  if (!emailType) {
    return {
      message: "type of Email is wrong",
      isValid,
    };
  }
  return {
    message: "",
    isValid,
  };
};

export default emailValidation;
