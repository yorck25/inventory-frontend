import React, { useState, FormEvent, ChangeEvent } from 'react';
import styles from './style.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //Anmeldedaten müssen noch vom Server geklaut werden 
    if (email === 'user@example.com' && password === 'passwort') {
      
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
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Passwort:
          <input
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;