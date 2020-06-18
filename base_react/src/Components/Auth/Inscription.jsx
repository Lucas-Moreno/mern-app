import React, { useState } from "react";
import axios from "axios";
import './connexion.css';

const Inscription = () => {
  const url = "http://localhost:5000/users/register";

  const [pseudo, setPseudo] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const sendUser = () => {
    axios.post(url, {
      pseudo,
      mail,
      password
    });
  };
  return (
    <div className="connexion">
      <h1 className="title_inscription">Inscription :</h1>
      <input
        className="input_inscription"
        onChange={e => setPseudo(e.target.value)}
        type="text"
        name="pseudo"
        placeholder="Pseudo"
      />
      <input className="input_inscription" onChange={e => setMail(e.target.value)} type="text" name="mail" placeholder="E-mail"/>
      <input
        placeholder="Mot de passe"
        className="input_inscription"
        onChange={e => setPassword(e.target.value)}
        type="password"
        name="password"
      />
      <button
        className="button_submit"
        onClick={() => {
          sendUser();
        }}
        type="submit"
      >
        S'inscrire
      </button>
      <p class="swap__auth">Vous avez déjà un compte ?</p> 
    </div>
  );
};

export default Inscription;
