import styled from "@emotion/styled";
import * as React from "react";
import NavigationBar from "./NavigationBar/NavigationBar";

const Header: React.FC = () => {
  return (
    <MainHeader>
      <h1>Form Validation</h1>
      <NavigationBar />
    </MainHeader>
  );
};

const MainHeader = styled.header({
  display: "flex",
  position: "fixed",
  width: "100%",
  backgroundColor: "#0087ff",
  padding: "0 30px",
  justifyContent: "space-between",
  height: "80px",
  alignItems: "center",
});

export default Header;
