import React, { useState, FormEvent, ChangeEvent } from 'react';
import styles from './style.module.scss';
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useHelperContext } from '../../lib/helperContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  var myHeaders = new Headers();
  myHeaders.append("username", email);
  myHeaders.append("password", password);

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const { token, setToken } = useHelperContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    fetch("http://localhost:8080/login", requestOptions)
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');

    return response.text();
  })
  .then(data => {
    console.log(data);
    setToken(data);
    navigate('/inventory');
  })
  .catch(error => console.error('There was an error:', error));
  };

  return (
    

    <div className={styles.login_container}>
      <h2>Inventory</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type = "text"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          
        </label>
        <label>
          Password:
          <input className={styles.password_container}
            type = {passwordShown ? "text" : "password"} 
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
          <button className={styles.buttoneye} type="button" onClick={togglePassword}> <FaEye/>  </button>
        </label>

        <button className={styles.button_submit} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;