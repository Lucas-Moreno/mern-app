import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './getmessages.css';

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [isShow, setIsShow] = useState(false)

    const url = 'http://localhost:5000/postmessages';


    useEffect(() =>{
        axios.get(url)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const deleteCard = (id) => {
        axios.delete(url+'/'+id)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updateCard = () => {
        setIsShow(!isShow);
    }


    return (
        <div>
            <ul className="cards">
                {posts.map(post => 
                    <div className="card" key={post._id}>
                        {isShow ? <input type="text" placeholder={post.title}></input> : <p className="card__title">{post.title}</p>}
                        {isShow ? <input type="text" placeholder={post.message}></input> : <p className="card__message">{post.message}</p>}
                        <div className="card__buttons">
                            <button type="submit" onClick={() => { updateCard(post._id)}}>Modifier</button> 
                            <button type="submit" onClick={() => { deleteCard(post._id)}}>Supprimer</button> 
                        </div>  
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Posts