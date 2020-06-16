import React, {useState, useEffect} from "react";
import App from  "../../App/App";
import {useHistory, withRouter, Link} from "react-router-dom";
import {getJwt} from '../../Helpers/jwt';
import axios from "axios";


const Authenticated = () => {

  const url = "http://localhost:5000/users/me";
  const [user, setUser] = useState(undefined);

  let history = useHistory();

  function pushToConnection() {
    history.push('/');
  }

  useEffect(() => {
    const jwt = getJwt();
    if(!jwt) {
      pushToConnection();
    }
    axios
      .get(url, {headers: {Authorization: `Bearer ${jwt}`}})
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        localStorage.removeItem('token');
        pushToConnection();
      });
  });
  if(user === undefined) {
    return (
      <div><p>loading...</p></div>
    )
  }
  return(
    <div>
      <App />
    </div>
  )
};
export default withRouter(Authenticated);