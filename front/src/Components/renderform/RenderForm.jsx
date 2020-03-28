import React from 'react'
import './renderform.css';

const RenderForm = () => {
    return (
        <div>
            <table>
                <tr>
                    <td>Produit :</td>
                    <td>Prix :</td>
                    <td>Description :</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td><input type='submit' value='modifier' /></td>
                    <td><input type='submit' value='supprimer' /></td>
                </tr>
	        </table>
        </div>
    )
}

export default RenderForm