import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Inscription :</h1>
      Pseudo :
      <input
        onChange={e => setPseudo(e.target.value)}
        type="text"
        name="pseudo"
      />
      E-mail :
      <input onChange={e => setMail(e.target.value)} type="text" name="mail" />
      Mot de passe :
      <input
        onChange={e => setPassword(e.target.value)}
        type="password"
        name="password"
      />
      <button
        onClick={() => {
          sendUser();
        }}
        type="submit"
      >
        S'inscrire
      </button>
    </div>
  );
};

export default Inscription;
