import styled from "@emotion/styled";
import * as React from "react";
import FormRegisterInput from "./FormRegisterInput/FormRegisterInput";

const Register: React.FC = () => {
  return (
    <Wraper>
    <Card>
      <h1>Register Here</h1>
      <Form>
        <FormRegisterInput 
        id="username"
        label="Username"
        type="text"
        />
        <FormRegisterInput 
        id="email"
        label="Email"
        type="email"
        />
        <FormRegisterInput 
        id="password"
        label="Password"
        type="password"
        />
        <FormRegisterInput 
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        />
        <WrapBotton>
          <button>
          Submit
          </button>
        </WrapBotton>
      </Form>
    </Card>
    </Wraper>
  );
};

const Card = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50%',
  padding: '20px 35px',
  borderRadius: '5px',
  boxShadow: '0px 0px 9px -1px rgba(0,0,0,0.53)'
})
const Wraper = styled.div({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems : 'center'
})
const Form = styled.form({
  width: "100%",
  marginTop: '20px',
})
const WrapBotton = styled.div({
  display: 'flex',
  justifyContent: 'center',
  height: '30px',
  button: {
    cursor: 'pointer',
    fontWeight: 'bolder',
    width: '30%',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#0087ff',
    ':disable' : {
      color: 'gray',
      backgroundColor: 'gray',
    },
    ':active' : {
      color: 'white',
      backgroundColor: '#12d901',
    }
  }
})
export default Register;
