import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./LogIn.css";

const LogIn = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // console.log(user);

  return (
    <div className="log">
      {isAuthenticated && <div><img className="user-img" src={user.picture} alt="user's img" /></div>}
      {isAuthenticated && <h3 className="user-name">{user.given_name}</h3>}
      {isAuthenticated ? (
        <button
          className="log-btn"
          onClick={(e) => {
            logout();
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          className="log-btn"
          onClick={(e) => {
            loginWithRedirect();
          }}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default LogIn;
