import React from 'react';
import { Link } from 'react-router-dom'; 
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="container">
      <div className="login-card">
        
        <div className="left-section">
          <img src="https://lform.com/cms/resources/media/2022/08/seo-marathon-illustration.jpg" alt="Illustration" className="login-image" />
        </div>

       
        <div className="right-section">
          <div className="login-title">Welcome</div>
          <input type="email" className="login-input" placeholder="Email" />
          <input type="password" className="login-input" placeholder="Password" />
          <div className="remember-me">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button className="login-button">Sign In</button>

        
          <div className="signup-link">
            Do not have an account? <Link to="/signup">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
