import React, { useState } from 'react';

function Form() {
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [validate, setValidate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (field.firstName && field.lastName && field.email && field.phoneNumber) {
      setValidate(true);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <div className='form'>
        <form onSubmit={handleSubmit}>
            {submitted && validate ? (
            <span className='success'> Registration Successful</span>
            ) : null}
            <input
            type="text"
            placeholder="firstname"
            value={field.firstName}
            onChange={(event) => setField({ ...field, firstName: event.target.value })}
            />
            {submitted && !field.firstName ? (<span>Please fill out this field</span>) : null}
            <input
            type="text"
            placeholder="lastname"
            value={field.lastName}
            onChange={(event) => setField({ ...field, lastName: event.target.value })}
            />
            {submitted && !field.lastName ? (<span>Please fill out this field</span>) : null}

            <input
            type="email"
            placeholder="email"
            value={field.email}
            onChange={(event) => setField({ ...field, email: event.target.value })}
            />
            {submitted && !field.email ? (<span>Please fill out this field</span>) : null}

            <input
            type="number"
            placeholder="Phone number"
            value={field.phoneNumber}
            onChange={(event) => setField({ ...field, phoneNumber: event.target.value })}
            />
            {submitted && !field.phoneNumber ? (<span>Please fill out this field</span>) : null}

            <button type="submit" className='register'>Register</button>
            
        </form>
      </div>
    </div>
  );
}

export default Form;
