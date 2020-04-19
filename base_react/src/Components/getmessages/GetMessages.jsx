import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './getmessages.css';

const Posts = () => {
    const [posts, setPosts] = useState([])

    const url = 'http://localhost:5000/postmessages';


    useEffect(() =>{
        axios.get('http://localhost:5000/postmessages')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const deleteCard = (id) => {
        console.log(id);
        axios.delete(url+'/'+id)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <ul className="cards">
                {posts.map(post => 
                    <div className="card" key={post._id}>
                        <p className="card__title">{post.title}</p>
                        <p className="card__message">{post.message}</p>
                        <div className="card__buttons">
                            <button type="submit">Modifier</button>
                            <button type="submit" onClick={() => { deleteCard(post._id)}}>Supprimer</button> 
                        </div>  
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Posts