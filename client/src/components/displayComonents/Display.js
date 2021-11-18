import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Turn from './Turn'
import $ from "jquery";
import Button from '../homeComponents/Button';
import background from '../images/background-grid.jpeg'
import { useSelector } from "react-redux";
import axios from 'axios';

const options = {
    width: 800,
    height: 600,
    autoCenter: true,
    display: "double",
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
      turned: function(e, page) {
        console.log("Current view: ", $(this).turn("view"));
      }
    }
  };
  
  // const pages = [
  //   "https://sapiens.ui8.net/images/backdrops/colorful/1.svg",
  //   "https://sapiens.ui8.net/images/backdrops/colorful/2.svg",
  //   "https://sapiens.ui8.net/images/backdrops/colorful/3.svg",
  //   "https://sapiens.ui8.net/images/backdrops/colorful/4.svg",
  //   "https://sapiens.ui8.net/images/backdrops/colorful/5.svg",
  //   "https://sapiens.ui8.net/images/backdrops/colorful/6.svg"
  // ];


export default function Display() {
  let navigate = useNavigate();
  const [none, setNone] = useState(false)
  const [wrong, setWrong] = useState(true)
  const [user, setUser] = useState({title: '', author: ''})
  const state = useSelector((state) => {
    return {
      pages: state.pages.pages,
    };
  });

  React.useEffect(() => {
     console.log(state.pages)
  }, [])

  const publish = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8080/library', {pages: state.pages, title: user.title, userName: user.author})
    .then((res) => {      
     res.data?  navigate("/library")  : setWrong(res.data)
    })
  }

  const popUpModal = () => {
    setNone(true)
  }


    return (
      <div style={{backgroundImage: `url(${background})`, height: '100vh'}} className='display-container'>

      <div  className={none? "login-box": "login-box none"}>
            <h2>Share Your Creativity</h2>
            <form>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, title: e.target.value})} type="text" name="" required=""/>
                <label>Book Title</label>
            </div>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, author: e.target.value})} type="text" name="" required=""/>
                <label>Author Name</label>
            </div>
            <p className={wrong? 'none' : 'error'}>*All inputs are required.</p>
            <a href='#' onClick={(e) => publish(e)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Publish
            </a>
            </form>
      </div>

        <div className='display-nav'>
        <Link to="/">
          <Button value='Home'/>
        </Link>
          <Button value='Publish' handleEvent={popUpModal} />
        </div>
       { state.pages.length !== 0 ? <Turn options={options} className={none? "magazine none" : "magazine"}>
                {state.pages.map((page, index) => (
            <div style={{backgroundColor: 'white', display: 'flex', alignItems: 'center'}} key={index} className="page">
              <img src={page} alt="" />
            </div>
          ))}
        </Turn> : ''}
      </div>
    )
}
