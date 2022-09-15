import styled from "@emotion/styled";
import * as React from "react";
import RegisterContext from "src/hooks/register/context";
import Confirmation from "./Confirmation/Confirmation";
import FormRegisterInput from "./FormRegisterInput/FormRegisterInput";
import PasswordValidationPopup from "./PasswordValidationPopup/PasswordValidationPopup";

const Register: React.FC = () => {
  const {
    data,
    isValid,
    confirmPassowrdInput,
    emailInput,
    passwordInput,
    usernameInput,
    submitHandler,
  } = React.useContext(RegisterContext);
  const [modal, setModal] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [passwordPopup, setPasswordPopup] = React.useState<boolean | null>(
    null
  );
  React.useEffect(() => {
    if (
      isValid.usernameValidation.isValid &&
      isValid.emailValidation.isValid &&
      isValid.passwordValidation.isValid &&
      isValid.confirmPasswordValidation.isValid
    ) {
      setVisible(true);
    }
    return () => {
      setVisible(false);
    };
  }, [isValid]);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setModal(true);
  };
  return (
    <Wraper>
      {modal && (
        <Confirmation setModal={setModal} submitHandler={submitHandler} />
      )}
      <Card>
        <h1>Register Here</h1>
        <Form onSubmit={onSubmit}>
          <FormRegisterInput
            id="username"
            label="Username"
            type="text"
            onChange={usernameInput}
            onBlur={usernameInput}
            message={isValid.usernameValidation.message}
            isValid={isValid.usernameValidation.isValid}
            value={data.username}
          />
          <FormRegisterInput
            id="email"
            label="Email"
            type="email"
            onChange={emailInput}
            onBlur={emailInput}
            message={isValid.emailValidation.message}
            isValid={isValid.emailValidation.isValid}
            value={data.email}
          />
          <FormRegisterInput
            id="password"
            label="Password"
            type="password"
            onChange={passwordInput}
            onFocus={() => {
              setPasswordPopup(true);
            }}
            onBlur={() => {
              setPasswordPopup(false);
            }}
            isValid={isValid.passwordValidation.isValid}
            value={data.password}
          />
          {!isValid.passwordValidation.isValid && (
            <PasswordValidationPopup
              active={passwordPopup}
              lowerCase={isValid.passwordValidation.lowerCase}
              upperCase={isValid.passwordValidation.upperCase}
              number={isValid.passwordValidation.number}
              symbol={isValid.passwordValidation.symbol}
              minLength={isValid.passwordValidation.minLength}
              whiteSpace={isValid.passwordValidation.whiteSpace}
              length={isValid.passwordValidation.length}
            />
          )}
          <FormRegisterInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            onChange={confirmPassowrdInput}
            onBlur={confirmPassowrdInput}
            message={isValid.confirmPasswordValidation.message}
            isValid={isValid.confirmPasswordValidation.isValid}
            value={data.confirmPassword}
          />
          <WraperBotton>
            <button type={"submit"} disabled={visible}>
              Submit
            </button>
          </WraperBotton>
        </Form>
      </Card>
    </Wraper>
  );
};

const Card = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  padding: "20px 35px",
  borderRadius: "5px",
  boxShadow: "0px 0px 9px -1px rgba(0,0,0,0.53)",
});
const Wraper = styled.div({
  display: "flex",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});
const Form = styled.form({
  width: "100%",
  marginTop: "20px",
});
const WraperBotton = styled.div({
  display: "flex",
  justifyContent: "center",
  height: "30px",
  button: {
    cursor: "pointer",
    fontWeight: "bolder",
    width: "30%",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#0087ff",
    ":disabled": {
      color: "white",
      backgroundColor: "gray",
      cursor: "not-allowed",
    },
    ":active": {
      color: "white",
      backgroundColor: "#12d901",
    },
  },
});

export default Register;
