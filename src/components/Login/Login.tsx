import styled from "@emotion/styled";
import * as React from "react";
import LoginContex from "src/hooks/login/context";
import FormLoginInput, { ActiveRef } from "./FormLoginInput/FormLoginInput";
import Notification from "./Notification/Notification";

const Login: React.FC = () => {
  const {
    data,
    isValid,
    notification,
    usernameInput,
    passwordInput,
    submitHandler,
  } = React.useContext(LoginContex);
  const [valid, setValid] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (
      isValid.usernameValidation.isValid &&
      isValid.passwordValidation.isValid
    ) {
      setValid(true);
    }
    return () => {
      setValid(false);
    };
  }, [isValid]);
  const usernameInputRef = React.useRef<ActiveRef | null>(null);
  const passwordInputRef = React.useRef<ActiveRef | null>(null);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valid) {
      await submitHandler();
    } else if (!isValid.usernameValidation.isValid) {
      usernameInputRef.current?.activete();
    } else if (!isValid.passwordValidation.isValid) {
      passwordInputRef.current?.activete();
    }
  };
  return (
    <Wraper>
      {notification.notification && (
        <Notification message={notification.message} />
      )}
      <Card>
        <h1>Login</h1>
        <Form onSubmit={onSubmit}>
          <FormLoginInput
            ref={usernameInputRef}
            id="username"
            label="Username"
            type="text"
            onChange={usernameInput}
            onBlur={usernameInput}
            value={data.username}
            isValid={isValid.usernameValidation.isValid}
            message={isValid.usernameValidation.message}
          />
          <FormLoginInput
            ref={passwordInputRef}
            id="password"
            label="Password"
            type="password"
            onChange={passwordInput}
            onBlur={passwordInput}
            value={data.password}
            isValid={isValid.passwordValidation.isValid}
            message={isValid.passwordValidation.message}
          />
          <WraperBotton>
            <button type={"submit"}>Login</button>
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
    ":hover": {
      color: "white",
    },
    ":active": {
      color: "white",
      backgroundColor: "#12d901",
    },
  },
});
export default Login;
