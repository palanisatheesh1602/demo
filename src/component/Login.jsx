import React from 'react'
import './Login.scss'
import logo from './assets/images/logo.png'
export default function Login() {
    return (
        <div>
            <form className="loginpage">
                <div className="curve">
                <div className="loginform">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                       <div>
                         <h1>Login Form</h1>
                         <h5>Enter your credentials</h5>
                         <label className="username">Username/Email</label><br></br>
                         <input className="input" type="text"></input>
                        <div>
                            <label className="password">Password</label><br></br>
                            <input className="input" type="password"></input>
                            <h6><a href="#" id="forgetpwd">Forget Password?</a></h6>
                            <button className="loginbtn">Login</button>
                            <h5 className="signupage">Don't have an account<a href="#" id="signuplink">Sign Up</a>here</h5>
                        </div>
                      </div>    
                </div>
                </div>
            </form>
        </div>
    )
}
