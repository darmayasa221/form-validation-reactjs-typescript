import styled from "@emotion/styled";
import * as React from "react";
import RegisterContext from "src/hooks/register/context";
import FormRegisterInput from "./FormRegisterInput/FormRegisterInput";
import PasswordValidationPopup from "./PasswordValidationPopup/PasswordValidationPopup";

const Register: React.FC = () => {
  const {
    data,
    isValid,
    onChangeConfirmPassword,
    onChangeEmail,
    onChangePassword,
    onChangeUsername,
    onSubmit,
  } = React.useContext(RegisterContext);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [passwordPopup, setPasswordPopup] = React.useState<boolean | null>(null)
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
  return (
    <Wraper>
      <Card>
        <h1>Register Here</h1>
        <Form onSubmit={onSubmit}>
          <FormRegisterInput
            id="username"
            label="Username"
            type="text"
            onChange={onChangeUsername}
            onBlur={onChangeUsername}
            message={isValid.usernameValidation.message}
            isValid={isValid.usernameValidation.isValid}
            value={data.username}
          />
          <FormRegisterInput
            id="email"
            label="Email"
            type="email"
            onChange={onChangeEmail}
            onBlur={onChangeEmail}
            message={isValid.emailValidation.message}
            isValid={isValid.emailValidation.isValid}
            value={data.email}
          />
          <WraperPasswordInput>
            <FormRegisterInput
              id="password"
              label="Password"
              type="password"
              onChange={onChangePassword}
              onFocus={() => {setPasswordPopup(true)}}
              onBlur={() => {setPasswordPopup(false)}}
              isValid={isValid.passwordValidation.isValid}
              value={data.password}
            />
            {!isValid.passwordValidation.isValid &&  <PasswordValidationPopup 
            active={passwordPopup}
            lowerCase={isValid.passwordValidation.lowerCase}
            upperCase={isValid.passwordValidation.upperCase}
            number={isValid.passwordValidation.number}
            symbol={isValid.passwordValidation.symbol}
            minLength={isValid.passwordValidation.minLength}
            whiteSpace={isValid.passwordValidation.whiteSpace}
            length={isValid.passwordValidation.length}
            />}
          </WraperPasswordInput>
          <FormRegisterInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            onChange={onChangeConfirmPassword}
            onBlur={onChangeConfirmPassword}
            message={isValid.confirmPasswordValidation.message}
            isValid={isValid.confirmPasswordValidation.isValid}
            value={data.confirmPassword}
          />
          <WraperBotton>
            <button type={"submit"} disabled={!visible}>
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
    },
    ":active": {
      color: "white",
      backgroundColor: "#12d901",
    },
  },
});
const WraperPasswordInput = styled.div({});

export default Register;
