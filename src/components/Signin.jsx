import React from 'react';
// import { Link } from 'react-router-dom';
import '../components/Stylling.css'
import logo from '../Images/logo.png'
import undraw_secure_login from '../Images/undraw_secure_login.png'
const Signin = () => {
  return <div className="homeCover">
      
          
          <div className='login-container'>
              <div className='half'>
            <form action='index.html'>
            <img src={logo} className='profilepic'/>
            <h1></h1>  
            <div className='input-div one focus'>
            <div className='i'>
              <i className='fas fa-user'></i>
            </div>
            <div>
              <h5>Username</h5>
              <input className='input' type="text"></input>
            </div>
            </div>
            <div className='input-div two focus'>
            <div className='i'>
              <i className='fas fa-lock'></i>
            </div>
            <div>
              <h5>Password</h5>
              <input className='input' type="password"></input>
            </div>
            </div>
            {/* <Link to="/Forgetpassword">Forgot Password</Link> */}
            <input type="submit" className='btn' value="Login"></input>
            {/* <Link to="/Register">Register</Link> */}
            <div>FORGOT PASSWORD</div>
            </form>
            </div>
            {/* <hr className='line1'/> */}
            <div className='half1'>
                <h1 className='heading'>WELCOME TO SOCIETY ADMNISTATOR PORTAL</h1>
            <img className='avatar' src={undraw_secure_login}/>
            <div>CREATE ACCOUNT</div>
          </div>
          </div>
          
        
  </div>;
};

export default Signin;
