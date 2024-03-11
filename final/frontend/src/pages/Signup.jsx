import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    college: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8181/api/v1/auth/register', form); // Update the URL to match your backend endpoint
      setSignupSuccess(true);
    } catch (error) {
      if (error.response && error.response.data) {
        setFormErrors(error.response.data.errors); // Set form errors from server response
      }
      console.error('Signup error:', error);
    }
  };

  return (
    <div className='body__signup'>
      <div className='signup__container'>
        <div className='header'>
          <div className='text'>Sign Up</div>
          <div className='underline'></div>
        </div>
        {signupSuccess ? (
          <div className='success-message'>Signup successful. Please <Link to="/login">login</Link>.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='inputs1'>
              <div className='input1'>
                <input type="text" placeholder='Name' name="name" value={form.name} onChange={handleChange} />
              </div>
              <div className='input1'>
                <input type="email" placeholder='Email' name="email" value={form.email} onChange={handleChange} />
              </div>
              <div className='input1'>
                <input type="password" placeholder='Password' name="password" value={form.password} onChange={handleChange} />
              </div>
              <div className='input1'>
                <input type="text" placeholder='Address' name="address" value={form.address} onChange={handleChange} />
              </div>
              <div className='input1'>
                <input type="text" placeholder='College' name="college" value={form.college} onChange={handleChange} />
              </div>
            </div>
            <div className='form-errors'>
              {Object.values(formErrors).map((error, index) => (
                <div key={index} className="error-message">{error}</div>
              ))}
            </div>
            <div className='submit-container'>
              <div className='submit'>
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        )}
        <div className='login_redirect'>
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
