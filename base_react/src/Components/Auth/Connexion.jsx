import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Connexion = () => {
  const url = "http://localhost:5000/users/login";

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [redirection, setRedirection] = useState(false);

  const connectUser = () => {
    axios
      .post(url, {
        mail,
        password
      })
      .then(() => setRedirection(true));
  };

  return (
    <div>
      <h1>Connexion :</h1>
      E-mail :
      <input onChange={e => setMail(e.target.value)} type="text" name="mail" />
      Mot de passe :
      <input
        onChange={e => setPassword(e.target.value)}
        type="text"
        name="password"
      />
      {redirection === true ? <Redirect to="/app" /> : null}
      <button
        onClick={() => {
          connectUser();
        }}
        type="submit"
      >
        Se connecter
      </button>
    </div>
  );
};

export default Connexion;
