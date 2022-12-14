import styled from "@emotion/styled";
import * as React from "react";
import { Link } from "react-router-dom";
import NavigationList from "./NavigationList";

const NavigationBar: React.FC = () => {
  return (
    <Nav>
      <ul>
        <NavigationList />
      </ul>
      <Wrap>
        <Link className="register" to="/register">
          Register
        </Link>
        <Link className="login" to="/login">
          <p>Login</p>
        </Link>
      </Wrap>
    </Nav>
  );
};

const Nav = styled.nav({
  height: "100%",
  display: "flex",
  alignItems: "center",
  ul: {
    display: "flex",
  },
});
const Wrap = styled.div({
  height: "50%",
  borderLeft: "2px solid white",
  display: "flex",
  alignItems: "center",
  fontWeight: "bolder",
  a: {
    display: "block",
    width: "90px",
  },
  ".register": {
    textAlign: "center",
    color: "black",
    ":hover": {
      color: "white",
    },
  },
  ".login": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    color: "white",
    backgroundColor: "black",
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
});
export default NavigationBar;
