import React, { useState, useEffect } from 'react';

function Form (props) {

    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <h2>Add a Team Member</h2>
                    <button disabled={!values.name || !values.email || !values.role}>Submit!</button>
                </div>
                <div>
                    <h4>General Info</h4>
                    <label htmlFor='nameInput'>
                        <input
                            id='nameInput'
                            name='name'
                            type='text'
                            placeholder='Enter Name'
                            maxLenght='30'
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                    <label>Email:
                        <input 
                            id='emailInput'
                            name='email'
                            type='email'
                            placeholder='Enter Email'
                            maxLength='30'
                            value={values.email}
                            onChange={onChange}
                        />
                    </label>
                    <label>Role:
                        <select 
                            name='role'
                            value={values.role}
                            onChange={onChange}
                        >
                            <option value=''>Select a Role</option>
                            <option value='student'>Student</option>
                            <option value='instructor'>Instructor</option>
                            <option value='tl'>Team Lead</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Form;