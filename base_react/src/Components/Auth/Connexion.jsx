import React from "react";
import { Link } from "react-router-dom";

const Connexion = () => {
  return (
    <div>
      <h1>Connexion :</h1>
      E-mail :<input />
      Mot de passe :<input />
      <Link to="/app">
        <button>Se connecter</button>
      </Link>
    </div>
  );
};

export default Connexion;
