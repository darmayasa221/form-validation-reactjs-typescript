import {
  lowerCase,
  number,
  symbol,
  upperCase,
  whiteSpace,
} from "src/commons/regex";

export type PasswordValidationType = {
  isValid: boolean | null;
  whiteSpace: boolean;
  length: boolean;
  number: boolean;
  upperCase: boolean;
  lowerCase: boolean;
  minLength: boolean;
  symbol: boolean;
};

const passwordValidation = (value: string): PasswordValidationType => {
  const isHasWhiteSpace: boolean = whiteSpace.test(value);
  const isValidlengthPassword: boolean = value.length > 0;
  const isMinLength: boolean = value.length >= 6;
  const isLowerCase: boolean = lowerCase.test(value);
  const isUpperCase: boolean = upperCase.test(value);
  const isNumber: boolean = number.test(value);
  const isSymbol: boolean = symbol.test(value);
  const isValid: boolean =
    !isHasWhiteSpace &&
    isValidlengthPassword &&
    isMinLength &&
    isLowerCase &&
    isUpperCase &&
    isNumber &&
    isSymbol;
  return {
    isValid,
    whiteSpace: isHasWhiteSpace,
    length: isValidlengthPassword,
    number: isNumber,
    minLength: isMinLength,
    upperCase: isUpperCase,
    lowerCase: isLowerCase,
    symbol: isSymbol,
  };
};

export default passwordValidation;
