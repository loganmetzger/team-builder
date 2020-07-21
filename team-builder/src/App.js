import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'


const initialFormValues = {
  name: '', 
  email: '',
  role: ''
}

function App() {

  const [team, setTeam] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
