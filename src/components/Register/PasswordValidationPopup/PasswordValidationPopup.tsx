import styled from "@emotion/styled";
import * as React from "react";
import { PasswordValidationType } from "src/hooks/register/validations/password";
type PropsPassowrdValidationPopup = Partial<PasswordValidationType> & {
  active: boolean | null;
};
const PasswordValidationPopup: React.FC<PropsPassowrdValidationPopup> = ({
  active,
  length,
  lowerCase,
  upperCase,
  number,
  minLength,
  symbol,
  whiteSpace,
}) => {
  return active ? (
    <Wraper>
      <h1>Password Requirtments :</h1>
      <ul>
        <li>
          {minLength ? (
            <s>
              <i>Min Character 6</i>
            </s>
          ) : (
            <p> Min Character 6 </p>
          )}
        </li>
        <li>
          {lowerCase ? (
            <s>
              <i>Lower Case</i>
            </s>
          ) : (
            <p>Lower Case</p>
          )}
        </li>
        <li>
          {upperCase ? (
            <s>
              <i>Upper Case</i>
            </s>
          ) : (
            <p>Upper Case</p>
          )}
        </li>
        <li>
          {number ? (
            <s>
              <i>Number</i>
            </s>
          ) : (
            <p>Number</p>
          )}
        </li>
        <li>
          {symbol ? (
            <s>
              <i>Symbol</i>
            </s>
          ) : (
            <p>Symbol</p>
          )}
        </li>
        <li>
          {!whiteSpace ? (
            <s>
              <i>White Space</i>
            </s>
          ) : (
            <p>White Space</p>
          )}
        </li>
      </ul>
    </Wraper>
  ) : !length && active === false ? (
    <ErrorMessage>
      <i>please input Password, Password should been filled</i>
    </ErrorMessage>
  ) : (
    <></>
  );
};

const Wraper = styled.div({
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "2px",
  boxShadow: "0 2px 5px 0 rgba(0,0,0,0.26)",
  width: "auto",
  fontSize: "small",
  padding: "9px",
  h1: {
    fontWeight: "bold",
    fontSize: "13px",
  },
  p: {
    color: "red",
  },
  li: {
    paddingLeft: "5px",
  },
});
const ErrorMessage = styled.p({
  color: "red",
  fontSize: "14px",
  paddingLeft: "4px",
  paddingBottom: "5px",
});

export default PasswordValidationPopup;
