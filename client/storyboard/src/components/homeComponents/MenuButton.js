import React, { useState, useEffect, useRef } from 'react'
import border from '../images/border.svg'

export default function MenuButton({img, value, handleEvent, handleClick}) {
    const button1 = useRef();

    return (
        <div onClick={(e) => handleClick(e)} className="menu__item">
            <div ref={button1}  className="menu__preview" onMouseDown={(e)=> handleEvent(e, button1) } onMouseUp={(e)=> handleEvent(e, button1) } >
                <img className="menu__icon"  src={img}/>
                <img className="menu__stroke" alt={value} src={border}/>
            </div>
            <div className="menu__title">{value}</div>
        </div>
    )
}
