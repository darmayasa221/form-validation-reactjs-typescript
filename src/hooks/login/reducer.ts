export type InitialLoginState = {
  username: string,
  password: string,
}

export type ActionTypeLogin = 
| {type: 'INPUT_USERNAME'; payload: string}
| {type: 'INPUT_PASSWORD'; payload: string}

const loginReducer = (
  state: InitialLoginState,
  action: ActionTypeLogin
): InitialLoginState => {
  return {
    username: '',
    password: '',
  }
}

export default loginReducer;