import { createBrowserRouter } from "react-router-dom";
import Register from "src/components/Register/Register";
import App from 'src/App'
import Login from "src/components/Login/Login";
const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "register",
        element: <Register />
      },
      {
        path : 'login',
        element : <Login />,
      }
    ]
  }
])

export default routers