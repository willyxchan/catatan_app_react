// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const handleRegister = async () => {
    try {
      // Lakukan permintaan ke endpoint register dengan username dan password
      // Gantilah URL sesuai dengan API yang Anda gunakan
      const response = await fetch('URL_REGISTER', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Jika berhasil, dapatkan token dari respons
        const data = await response.json();
        const token = data.token;

        // Panggil fungsi login dari context untuk menyimpan token dan mengatur status login
        login(token);

        // Redirect ke halaman Home setelah register berhasil
        navigate('/');
      } else {
        console.error('Gagal register');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Register</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;