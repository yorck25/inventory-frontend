import React, { useState, FormEvent, ChangeEvent } from 'react';
import styles from './style.module.scss';
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //Anmeldedaten müssen noch vom Server geklaut werden 
    if (email === 'user@example.com' && password === 'passwort') {
      navigate('/inventory');
     
    } else {
      alert('Login fehlgeschlagen. Überprüfe Email und Passwort.');
    }
  };

  return (
    <div className={styles.login_container}>
      <h2>Inventory</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type = "email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          
        </label>
        <label>
          Passwort:
          <input className={styles.password_container}
            type = {passwordShown ? "text" : "password"} 
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
          <button className={styles.buttoneye} type="button" onClick={togglePassword}> <FaEye/>  </button>
        </label>

        
            
        <button className={styles.buttonsubmit} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;