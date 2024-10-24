import React, { useState } from 'react'
import api from '../api'
import Button from '../components/Button.tsx'
import Navbar from '../components/Navbar.jsx'
import '../components/components.css'
import './pages.css'
import { FaUserPlus } from "react-icons/fa";

const Register = () => {
  const [regData, setRegData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [regStatus, setRegStatus] = useState('');

  const handleRegInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setRegData({
      ...regData,
      [event.target.name]: value,
    });
  };

  const validateForm = () => {
    // exceeds string limits or contains invalid characters
    if (!regData.username || !regData.password) {
      setError('Username and password are required');
      return false;
    };
    if (regData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    };
    setError('');
    return true;
  };

  const handleRegFormSubmit = async (event) => {
    event.preventDefault(); // prevent default of removing everything with fetch and submit api
    if (!validateForm()) return;
    setLoading(true);
    try {
      await api.post('/auth/', regData); // case insensitive
      setError('');
      setRegStatus(`${regData.username} registered successfully`);
      setRegData({
        username: '',
        password: ''
      });
    } catch (error) {
      setError('An account with that name already exists', error);
      console.log(error);
      setRegData({
        ...regData,
        password: ''
      });
    } finally {
      setLoading(false);
    };
  };

  return (
    <div className='main-page'>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <h3>Registration</h3>
      <div className='container'>
        <div className='register-pad'>
          <div className='register p-3 border border-dark reg-box'>
            <h5>Register A New Profile</h5>
            <form onSubmit={handleRegFormSubmit}>

              <div className='mb-3'>
                <label htmlFor="username" className='form-label'>Username</label>
                <input type="text" className='form-control' id='username' name='username' onChange={handleRegInputChange} value={regData.username} maxLength={15} />
              </div>

              <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className='form-control' id='password' name='password' onChange={handleRegInputChange} value={regData.password} maxLength={36} />
              </div>

              <Button id='register' label={loading ? ' Registering' : ' Register'} icon={<FaUserPlus />} variant='success' type='submit' disabled={loading}></Button>
              {error && <p className="error">{error}</p>}
              {regStatus && <p className="success">{regStatus}</p>}
            </form>
          </div>
          {localStorage.getItem('username') ? <></> : (<>Want to access Profile? <a href="/profile">Login</a></>)}
        </div>
      </div>
    </div>
  )
}

export default Register