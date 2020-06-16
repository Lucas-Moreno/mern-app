import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Connexion = () => {
  const url = "http://localhost:5000/users/login";

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function pushToApp() {
    history.push('/app');
  }

  const connectUser = () => {
    axios
      .post(url, {
        mail,
        password
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        pushToApp();
      });
  };
  

  return (
    <div>
      <h1>Connexion :</h1>
      E-mail :
      <input onChange={e => setMail(e.target.value)} type="text" name="mail" />
      Mot de passe :
      <input
        onChange={e => setPassword(e.target.value)}
        type="password"
        name="password"
      />
      <button
        onClick={ () => {
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
