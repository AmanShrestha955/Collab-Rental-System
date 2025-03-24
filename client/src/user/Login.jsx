import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user' // Default role
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be handled by parent component
    console.log('Form Data:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to Rent It</h2>
        <h2>SIGN IN</h2>
        <p className="subtitle">Sign in with your detail to continue</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
        <div className="form-group">
  
  <div className="radio-group">
    <div>
      <input
        type="radio"
        id="role-user"
        name="role"
        value="user"
        checked={formData.role === 'user'}
        onChange={handleChange}
      />
      <label htmlFor="role-user">User</label>
    </div>
    <div>
      <input
        type="radio"
        id="role-agent"
        name="role"
        value="agent"
        checked={formData.role === 'agent'}
        onChange={handleChange}
      />
      <label htmlFor="role-agent">Agent</label>
    </div>
  </div>
</div>
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          

          <button type="submit" className="submit-btn">
           Login
          </button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;