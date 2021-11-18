import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function SignUp() {
    const SinUpDiv = useRef();
    let navigate = useNavigate();
    const [wrong, setWrong] = useState(true)
    const [user, setUser] = useState({name: '' ,email: '', password: ''})

    useEffect(() => {
        SinUpDiv.current.parentElement.style.position = 'static'
    }, [])

    const sinup = (e) => {
    e.preventDefault()
    axios.post('/users', user)
        .then((res) => {          
            res.data? navigate("/login") : setWrong(false)
        })
        .catch(error => {
            console.log(error.response)
        });
    }
    return (
        <div className='login_div'>
        <div ref={SinUpDiv} className="login-box">
            <h2>signUp</h2>
            <form>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, name: e.target.value})} type="text" name="" required=""/>
                <label>userName</label>
            </div>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, email: e.target.value})} type="text" name="" required=""/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, password: e.target.value})} type="password" name="" required=""/>
                <label>Password</label>
            </div>
            <p className={wrong? 'none' : 'error'}>*All feilds are required.</p>
            <a className='link' href='#' onClick={(e) => sinup(e)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                SinUp
            </a>
            </form>
      </div>
      </div>
    )
}
