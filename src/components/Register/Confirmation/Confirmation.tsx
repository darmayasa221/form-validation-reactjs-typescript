import styled from "@emotion/styled";
import * as React from "react";
import Modal from "src/components/Modal/Modal";
type PropsConfirmation = {
  setModal: (intialState: boolean) => any;
  submitHandler: () => void;
};

const Confirmation: React.FC<PropsConfirmation> = ({
  setModal,
  submitHandler,
}) => {
  return (
    <Modal>
      <Wraper>
        <Card>
          <h1>Is the data entered correct?</h1>
          <WraperButton>
            <ButtonCancel
              type={"button"}
              onClick={() => {
                setModal(false);
              }}
            >
              Cancel
            </ButtonCancel>
            <ButtonSave
              type={"button"}
              onClick={() => {
                submitHandler();
                setModal(false);
              }}
            >
              Save
            </ButtonSave>
          </WraperButton>
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

const WraperButton = styled.div({
  height: "30px",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  button: {
    width: "40%",
  },
});
const ButtonCancel = styled.button({
  cursor: "pointer",
  fontWeight: "bolder",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#0087ff",
  ":hover": {
    color: "white",
    backgroundColor: "red",
  },
  ":active": {
    color: "white",
    backgroundColor: "#red",
  },
});
const ButtonSave = styled.button({
  cursor: "pointer",
  fontWeight: "bolder",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#0087ff",
  ":hover": {
    color: "white",
    backgroundColor: "#12d901",
  },
  ":active": {
    color: "white",
    backgroundColor: "#12d901",
  },
});

export default Confirmation;
