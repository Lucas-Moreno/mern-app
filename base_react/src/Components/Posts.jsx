import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Posts = () => {
		const [posts, setPosts] = useState([])
		
		/// quand tu fais un useEffect pour récupperer des data depuis une api mets un tableau vide.
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
            <ul>
                {posts.map(post => 
                    <div key={post._id}>
                        <p>{post.title}</p>
                        <p>{post.message}</p>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Posts