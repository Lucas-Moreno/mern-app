import React from 'react'
import { useState } from 'react'
import axios from 'axios'

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
        <div>
            <div>
               <input  onChange={e => setTitle(e.target.value)} type="text" name="title"></input> 
            </div>
            <div>
                <input type="text"  onChange={e => setMessage(e.target.value)} name="message"></input>
            </div> 
            <button onClick={() => { sendForm() }} type="submit">Envoyer</button>
        </div>
    )
}

export default Form