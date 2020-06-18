import React, { useState } from "react";
import Connexion from "../Components/Auth/Connexion";
import Inscription from "../Components/Auth/Inscription";
import Logo from "../assets/logo.png";
import "./auth.css";

const Auth = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleButton = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="auth">
      <div className="container">
      <img src={Logo} className="logo" />
      {isShow ? <Inscription /> : <Connexion />}
      {isShow ? (
        <p onClick={toggleButton} className="swap_auth">
          Se connecter
        </p>
      ) : (
          <p onClick={toggleButton} className="swap_auth">
            Inscrivez-vous
          </p>
      )}
      </div>
    </div>
  );
};

export default Auth;
