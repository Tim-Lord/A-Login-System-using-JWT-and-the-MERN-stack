import React, { useState, useContext } from "react";

import AlertContext from "../../context/alerts/alertContext";

const Register = () => {
  // Initialise the Context
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name == "" || email == "" || password == "") {
      setAlert("Please entered all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      console.log("Registered");
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'> Name:</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='email'> Email:</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='password'> Password:</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor='password'> Confirm Password:</label>
          <input
            type='password'
            name='password'
            value={password2}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};
export default Register;
