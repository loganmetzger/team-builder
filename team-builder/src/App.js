import React, { useState } from 'react';
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

  const updateForm = (inputName, inputValue) => {
    setformValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      namer: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newMember.name || !newMember.email || !newMember.role) {
      return null;
    }
  }
  }

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
