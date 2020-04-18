import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './form.css';

const Form = () => {
    const [ message , setMessage ] = useState('')
    const [ title , setTitle ] = useState('')
    
    const sendForm = () => {
        axios.post("http://localhost:5000/postmessages", {
            title,
            message,
        })
    }
    return (
        <form className="form">
            <div className="form__title">
                <p className="title__form">Titre du message :</p>
               <input  onChange={e => setTitle(e.target.value)} type="text" name="title"></input> 
            </div>
            <div className="form__message">
                <p className="title__form">Ecrire votre message :</p>
                <textarea type="text" rows="10" cols="50" onChange={e => setMessage(e.target.value)} name="message"></textarea>
            </div> 
            <button onClick={() => { sendForm() }} type="submit">Envoyer</button>
        </form>
    )
}

export default Form