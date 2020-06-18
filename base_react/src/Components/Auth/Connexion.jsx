import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import './connexion.css';


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
    <div className="connexion">
      <h1 className="title">Connectez-vous</h1>
      <input className="input" onChange={e => setMail(e.target.value)} type="text" name="mail" placeholder="E-mail"/>
      <input
        className="input"
        onChange={e => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Mot de passe"
      />
      <button
        className="button_submit"
        onClick={ () => {
          connectUser();
        }}
        type="submit"
      >
        Se connecter
      </button>
      <p class="swap__auth">Vous n’êtes pas inscrit ?</p> 
    </div>
  );
};

export default Connexion;
