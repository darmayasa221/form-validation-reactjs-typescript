import styled from "@emotion/styled";
import * as React from "react";

const NavigationList: React.FC = () => {
  return (
    <>
      <Li>
        <a href="/">Admin</a>
      </Li>
      <Li>
        <a href="/">User</a>
      </Li>
    </>
  );
};

const Li = styled.li({
  paddingRight: "20px",
  a: {
    color: "black",
    ":hover,:active": {
      color: "white",
    },
  },
});

export default NavigationList;
