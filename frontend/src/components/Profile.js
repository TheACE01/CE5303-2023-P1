import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} 
          style={{
            width: '80px', 
            height: '80px', 
            borderRadius: '50%',
          }}/>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;