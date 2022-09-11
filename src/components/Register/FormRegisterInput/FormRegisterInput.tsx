import styled from "@emotion/styled";
import * as React from "react";

type PropsFormRegisterInput = Partial<HTMLInputElement> & {
  label: string;
};

const FormRegisterInput: React.FC<PropsFormRegisterInput> = ({
  label,
  id,
  type,
}) => {
  return (
    <WrapInput>
      <label htmlFor={id}>{label}</label>
      <Input type={type} id={id} />
    </WrapInput>
  );
};
const WrapInput = styled.span({
  display: "flex",
  flexDirection: "column",
  label: { 
    fontWeight: 'bolder'
  }
});
const Input = styled.input({
  margin: '5px 0 8px 0',
  padding:'5px',
  borderRadius: '5px',
  outline: "none",
  border: '1px solid gray',
  ":focus,:active": {
    border: '1px solid #0087ff',
    outline: '3px inset #0087ff'
  }
})
export default FormRegisterInput;
