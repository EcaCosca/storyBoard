import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const loginDiv = useRef();
    let navigate = useNavigate();
    const [wrong, setWrong] = useState(true)
    const [user, setUser] = useState({email: '', password: ''})

    useEffect(() => {
        loginDiv.current.parentElement.style.position = 'static'
    }, [])
   
    const login = (e) => {
    e.preventDefault()
    axios.post('/users/login', {email: user.email, password: user.password})
        .then((res) => {           
            res.data? navigate("/tutorial") : setWrong(false)
        })
    }

    return (
        <div className='login_div'>
        <div ref={loginDiv} className="login-box">
            <h2>Login</h2>
            <form>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, email: e.target.value})} type="text" name="" required=""/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, password: e.target.value})} type="password" name="" required=""/>
                <label>Password</label>
            </div>
            <Link style={{float: 'left'}} to='/resetPassword'>forget your password?</Link><br/>
            <p className={wrong? 'none' : 'error'}>*The email or password are wrong.</p>
            <a className='link' href='#' onClick={(e) => login(e)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </a>
            </form>
      </div>
      </div>
    )
}
