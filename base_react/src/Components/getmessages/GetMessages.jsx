import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './getmessages.css';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:5000/postmessages')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        <div>
            <ul className="cards">
                {posts.map(post => 
                    <div className="card" key={post._id}>
                        <p className="card__title">{post.title}</p>
                        <p className="card__message">{post.message}</p>  
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Posts