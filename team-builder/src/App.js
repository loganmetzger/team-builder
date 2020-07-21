import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import Member from './Member'

const initialFormValues = {
  name: '', 
  email: '',
  role: ''
}

const firstMember = {
  name: 'Bloop',
  email: 'bloop@bloop.com',
  role: 'student'
}

function App() {

  const [team, setTeam] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newMember.name || !newMember.email || !newMember.role) {
      return null;
    }

    // setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form />
      {team.map(member => {
        return (
          <Member details={member} />
        )
      })}
    </div>
  );
}

export default App;
