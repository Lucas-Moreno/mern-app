import React from 'react';
import '../css/style.css';
import './App.css';
import Form from '../Components/form/Form.jsx';

const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Nouvelle Application</h1>
      <Form />
    </div>
  );
}

export default App;
