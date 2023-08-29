import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}> Log In  <LoginRoundedIcon /></button>;
};

export default LoginButton;