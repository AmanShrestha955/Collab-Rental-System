import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    userType: 'user', // Default to 'user'
    companyName: '' // Only used if userType is 'agent'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be handled by parent component
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Welcome to Rent IT</h2>
        <h2>SIGN UP</h2>
        <p className="subtitle">Sign up with your detail to continue</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          {/* User Type Selection */}
          <div className="form-group">
            <label>User Type</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="user"
                  checked={formData.userType === 'user'}
                  onChange={handleChange}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="agent"
                  checked={formData.userType === 'agent'}
                  onChange={handleChange}
                />
                Agent
              </label>
            </div>
          </div>

          {/* Full Name Field */}
          <div className="form-group">
            {/* <label htmlFor="fullname">Full Name</label> */}
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>

          {/* Conditional Company Name Field */}
          {formData.userType === 'agent' && (
            <div className="form-group">
              {/* <label htmlFor="companyName">Company Name(optional)</label> */}
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>
          )}

          {/* Phone Number Field */}
          <div className="form-group">
            {/* <label htmlFor="contact">Phone Number</label> */}
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Password Field */}
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

          {/* Confirm Password Field */}
          <div className="form-group">
            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;