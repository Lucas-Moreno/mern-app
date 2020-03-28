import React from 'react'

const Form = () => {
    return (
        <div>
            <h1>Créer un produit :</h1>
            <form id="form" name="form" method="post" action="">
                <div>
                    <p>Produit :</p>
                    <input type="text" name="product"/>
                </div>
                <div>
                    <p>Prix :</p>
                    <input type="text" name="price"/>
                </div>
                <div>
                    <p>Description :</p>
                    <textarea  rows="5" cols="33"></textarea>
                </div>
                <button type="submit" value="Submit">Envoyer</button>
                <button type="submit" value="Delete">Modifier</button>
            </form>	
        </div>
    )
}

export default Form