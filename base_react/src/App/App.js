import React from 'react';
import '../css/style.css';
import './App.css';
import Form from '../Components/Form';
import Posts from '../Components/Posts';

const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Nouvelle Application</h1>
      <Form />
      <Posts />
    </div>
  );
}

export default App;
