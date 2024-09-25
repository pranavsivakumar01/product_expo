import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message); 
      } else {
        alert(result.message); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-form">
          <h2>Create an account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-btn">Create an account</button>
          </form>

          <div className="divider">OR</div>

          <button className="google-btn">
            <img src="https://www.google.com/images/branding/product/1x/gsa_64dp.png" alt="Google Logo" />
            Continue with Google
          </button>

          <div className="login-link">
            Already have an account? <Link to="/login">GO TO LOGIN</Link>
          </div>

          <p>Want to check pricing? <Link to="/pricing">See Pricing Plans</Link></p>
        </div>

        <div className="signup-image">
          <img src="https://www.talkdesk.com/_next/image/?url=https%3A%2F%2Finfra-cloudfront-talkdeskcom.svc.talkdeskapp.com%2Ftalkdesk_com%2F10-steps-find-the-best-call-center-industry-benchmarks-2280x1160.png&w=1920&q=50" alt="Signup Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
