import styled from "@emotion/styled";
import * as React from "react";
export type ActiveRef = {
  activete: () => void;
};
type PropsFormLoginInput = Partial<HTMLInputElement> & {
  label: string;
  isValid?: boolean | null;
  message?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement, Element>
  ) => void;
};

const FormLoginInput = React.forwardRef<ActiveRef, PropsFormLoginInput>(
  ({ label, id, type, message, isValid, onChange, onBlur }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const activate = () => {
      inputRef.current?.focus();
    };
    React.useImperativeHandle(ref, () => {
      return {
        activete: activate,
      };
    });
    return (
      <WrapInput>
        <label htmlFor={id}>{label}</label>
        <Input
          ref={inputRef}
          type={type}
          id={id}
          onChange={onChange}
          isValid={isValid}
          onBlur={onBlur}
        />
        {!isValid && (
          <ErrorMessage isValid={isValid}>
            <i>{message}</i>
          </ErrorMessage>
        )}
      </WrapInput>
    );
  }
);

const WrapInput = styled.span({
  display: "flex",
  flexDirection: "column",
  label: {
    fontWeight: "bolder",
  },
});
const Input = styled.input<Pick<PropsFormLoginInput, "isValid">>(
  ({ isValid }) => ({
    margin: "5px 0 8px 0",
    padding: "5px",
    borderRadius: "5px",
    outline: "none",
    border: "1px solid gray",
    ":focus,:active": {
      border: `1px solid ${
        isValid === null ? "#0087ff" : isValid ? "#0087ff" : "red"
      }`,
      outline: `3px inset ${
        isValid === null ? "#0087ff" : isValid ? "#0087ff" : "red"
      }`,
      backgroundColor:
        isValid === null ? "none" : isValid ? "none" : "#ff9e9e75",
    },
  })
);
const ErrorMessage = styled.p<Pick<PropsFormLoginInput, "isValid">>(
  ({ isValid }) => ({
    color: "red",
    fontSize: "14px",
    paddingLeft: "4px",
    paddingBottom: isValid === null ? "none" : isValid ? "none" : "5px",
  })
);
export default FormLoginInput;
