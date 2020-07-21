import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    setTeam([firstMember])},[])

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if(!newMember.name || !newMember.email || !newMember.role) {
      return null;
    }

    setTeam([newMember, ...team]);

    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {team.map(member => {
        return (
          <Member details={member} />
        )
      })}
    </div>
  );
}

export default App;
