import React, { useState } from "react";
import Connexion from "../Components/Auth/Connexion";
import Inscription from "../Components/Auth/Inscription";
import "./auth.css";

const Auth = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleButton = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      {isShow ? <Inscription /> : <Connexion />}
      {isShow ? (
        <p onClick={toggleButton} className="swap_auth">
          Se connecter
        </p>
      ) : (
        <p onClick={toggleButton} className="swap_auth">
          S'inscrire
        </p>
      )}
    </div>
  );
};

export default Auth;
