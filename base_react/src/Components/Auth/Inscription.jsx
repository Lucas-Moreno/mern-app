import React, { useState } from "react";
import axios from "axios";
import './connexion.css';
import ButterToast, { Cinnamon, POS_TOP, POS_RIGHT } from 'butter-toast';


const Inscription = () => {
  const url = "http://localhost:5000/users/register";

  const [pseudo, setPseudo] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const toast = () => {
      ButterToast.raise({
        content: <Cinnamon.Crisp 
          scheme={Cinnamon.Crisp.SCHEME_BLUE}
          content={() => <div>Rendez-vous sur la page</div>}
          title="Vous êtes bien inscrit"/>
      });
  }

  const sendUser = () => {
    axios.post(url, {
      pseudo,
      mail,
      password
    })
    .then(res => {
      toast(res);
    });

  };

  
 
  

  return (
    <div className="connexion">
      <h1 className="title_inscription">Inscrivez-vous</h1>
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
        <ButterToast position={{vertical: POS_TOP, horizontal: POS_RIGHT}}/>
      <p class="swap__auth">Vous avez déjà un compte ?</p>
    </div>
  );
};

export default Inscription;
