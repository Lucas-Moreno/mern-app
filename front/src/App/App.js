import React from 'react';
import '../css/style.css';
import './App.css';
import Form from '../Components/form/Form';
import Renderform from '../Components/renderform/RenderForm';

const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Nouvelle Application</h1>
      <div className="containerForm">
        <Form />
        <Renderform />
      </div>

    </div>
  );
}

export default App;
