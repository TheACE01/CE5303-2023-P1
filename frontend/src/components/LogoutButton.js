import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out <LogoutRoundedIcon />
    </button>
  );
};

export default LogoutButton;