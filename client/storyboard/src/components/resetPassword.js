import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ResetPassword() {
    const loginDiv = useRef();
    let navigate = useNavigate();
    const [wrong, setWrong] = useState(true)
    const [user, setUser] = useState({email: '', password: ''})

    useEffect(() => {
        loginDiv.current.parentElement.style.position = 'static'
    }, [])
   
    const reset = (e) => {
    e.preventDefault()
    axios.put('http://localhost:8080/users/', {email: user.email, password: user.password})
        .then((res) => {  
            res.data? navigate("/tutorial") : setWrong(false)
        })
    }

    return (
        <div className='login_div'>
        <div ref={loginDiv} className="login-box">
            <h2>Reset Password</h2>
            <form>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, email: e.target.value})} type="text" name="" required=""/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, password: e.target.value})} type="password" name="" required=""/>
                <label>New Password</label>
            </div>
            <p className={wrong? 'none' : 'error'}>*The email or password are wrong.</p>
            <a className='link' href='#' onClick={(e) => reset(e)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Reset
            </a>
            </form>
      </div>
      </div>
    )
}