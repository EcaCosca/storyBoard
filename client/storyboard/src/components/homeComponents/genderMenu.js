import React, { useState, useEffect, useRef } from 'react'
import male from '../images/male.svg'
import female from '../images/female.svg'
import MenuButton from './MenuButton';

export default function GenderMenu({handleEvent, id}) {
    const [stateM, setstateM] = React.useState(true)
    const [state, setstate] = React.useState(true)
    const girl = () =>{
        let item = document.getElementById(id).children[0].classList;
        if (state){
            item.remove('none')
            setstate(false)
        }else{
            item.add('none')
            setstate(true)
        }
    }
    const guy = () =>{
        let item = document.getElementById(id).children[1].classList;
        if (stateM){
            item.remove('none')
            setstateM(false)
        }else{
            item.add('none')
            setstateM(true)
        }
    }
    return (
        <div className=" menu--sex">
                <MenuButton handleClick={guy} handleEvent={handleEvent} img={male} value='Male' />
                <MenuButton handleClick={girl} handleEvent={handleEvent} img={female} value='Female' />   
        </div>


    )
}
