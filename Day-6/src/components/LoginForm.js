import React from 'react'
import { useNavigate } from 'react-router-dom';
import register from './RegistrationForm'

export default function Login() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };
  return (
    <div>
      <form className="container">
      <h3 className="text-center mb-4 mt-4">Login or Create an Account</h3>
        <div className="row mb-4">
            <div className="form-group col-md-6">
            <h5 className="text mt-2 mb-4">New Customer</h5>
            <p>Registration Is Free And Easy..</p>
            <ul>
                <li>Faster Checkout</li>
                <li>Save Multiple Shipping Address</li>
                <li>View And Track Orders Or More</li>
            </ul>
            </div>
            <div className="form-group col-md-6">
            <h5 className="text mt-2 mb-4">Registered Customers</h5>
            <label for="inputEmail4">Email Address *</label>
            <input type="email" className="form-control" id="inputEmail4" />
            <label for="inputPassword4">Password *</label>
            <input type="password" className="form-control" id="inputPassword4"/>
            </div>
        </div>
        <div className="row">
        <div className="form-group col-md-6">
        <button type="submit" className="btn btn-danger mt-4 "onClick={handleCreateAccount}>Create an Account</button>
        </div>
        <div className="form-group col-md-6">
            <button type="submit" className="btn btn-danger mt-4">Login</button>
        </div>
        </div>
        </form>
    </div>
  )
}


// import React, { useState } from 'react';
// import './LoginForm.css';
// import './RegistrationForm.js';
// import { Link } from 'react-router-dom';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setEmail('');
//     setPassword('');
//   }
//   const handleRegister = () => {
//     // <RegistrationForm />
//     <Link to="/register">New User? Register Here</Link>
//   };        
  
//    return (
//      <div>
//         <div className="Container">
        
//        <form className="login-form" onSubmit={handleLogin}>
//        <div>
//         <h2>Login Form</h2>
//         </div>
//         <div>
//          <label htmlFor="email">Email:</label>
//          <input
//            type="email"
//            id="email"
//            value={email}
//            onChange={(e) => setEmail(e.target.value)}
//          />
//         </div>
//         <div>
//          <label htmlFor="password">Password:</label>
//          <input
//            type="password"
//            id="password"
//            value={password}
//            onChange={(e) => setPassword(e.target.value)}
//          />
//         </div>
//         <div>
//          <button type="submit">Login</button>
//          </div>
       
//       <div>
//        <button onClick={handleRegister}>New User? Register Here</button>
//        </div>
//        </form>
//      </div>
//      </div>
//    );
//  }

// export default LoginForm;