import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Button from '@mui/material/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={() => loginWithRedirect()} variant="contained" 
    startIcon={<LoginRoundedIcon />}>
      Log In
    </Button>
  )
};

export default LoginButton;