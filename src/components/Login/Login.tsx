import styled from "@emotion/styled";
import * as React from "react";
import FormLoginInput from "./FormLoginInput/FormLoginInput";

const Login: React.FC = () => {
  return (
    <Wraper>
      <Card>
          <h1>Login</h1>
        <Form>
          <FormLoginInput label="Username" type="text" />
          <FormLoginInput label="Password" type="password" />
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
export default Login;
