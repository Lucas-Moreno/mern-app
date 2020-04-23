import React, { useState, useEffect } from "react";
import axios from "axios";
import "./getmessages.css";

const Card = (post) => {
    
  const url = "http://localhost:5000/postmessages";

  const [isShow, setIsShow] = useState(false);
  const content = post.post;

    const [ message , setMessage ] = useState('')
    const [ title , setTitle ] = useState('')
    
    const updateCard = (id) => {
        axios.put(url+'/'+id, {
            title: title,
            message: message,
        })
    }

  const deleteCard = (id) => {
    axios
      .delete(url+ '/' +id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleCard = () => {
    setIsShow(!isShow);
  };

 
  return (
    <div className="card" key={content._id}>
      {isShow ? (
        <input className="card__title" type="text" placeholder={content.title} onChange={e => setTitle(e.target.value)}></input>
      ) : (
        <p className="card__title">{content.title}</p>
      )}
      {isShow ? (
        <textarea className="textarea__message" type="text" placeholder={content.message} onChange={e => setMessage(e.target.value)}></textarea>
      ) : (
        <p className="card__message">{content.message}</p>
      )}
      <div className="card__buttons">
        {isShow ? (
        <button
            type="submit"
            onClick={() => { 
                updateCard(content._id)
            }}
          >
            Envoyer
        </button>
        ) : (
          <button
          type="submit"
          onClick={() => {
            toggleCard(content._id);
          }}
        >
          Modifier
        </button>
        )}
        <button
          type="submit"
          onClick={() => {
            deleteCard(content._id);
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const url = "http://localhost:5000/postmessages";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul className="cards">
        {posts.map((post, i) => (
          <Card post={post} url={url} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;