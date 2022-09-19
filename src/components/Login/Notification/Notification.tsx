import styled from "@emotion/styled";
import * as React from "react";
import Modal from "src/components/Modal/Modal";
import { NotificationType } from "src/hooks/login";
type PropsNotification = Partial<NotificationType> 

const Notification: React.FC<PropsNotification> = ({message}) => {
  return (
    <Modal>
      <Wraper>
        <Card>
          <h1>{message}</h1>
        </Card>
      </Wraper>
    </Modal>
  );
};
const Wraper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  zIndex: 100,
  backgroundColor: "#2222223d",
  width: "100%",
  height: "100vh",
});
const Card = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "auto",
  backgroundColor: "white",
  padding: "20px 35px",
  borderRadius: "5px",
  boxShadow: "0px 0px 9px -1px rgba(0,0,0,0.53)",
  h1: {
    paddingBottom: "10px",
  },
});
export default Notification;
