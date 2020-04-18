import React from 'react'

const Form = () => {
    return (
        <div>
            <div>
               <input type="text" name="title"></input> 
            </div>
            <div>
                <input type="text" name="message"></input>
            </div> 
            <button type="submit">Envoyer</button>
        </div>
    )
}

export default Form