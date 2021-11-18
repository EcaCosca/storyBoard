import React from 'react'
import page from '../images/page.svg'
import MenuButton from './MenuButton';

export default function PagesMenu({handleEvent, setId, num}) {

    const showSlide = (e) =>{
        let id = e.target.parentElement.children[1].innerHTML || e.target.parentElement.children[1].alt
        let idName = id.replace(' ','').toLowerCase()
        setId(idName)
    }

    return (
        <div className="menu menu--pages">
            <MenuButton handleClick={showSlide} handleEvent={handleEvent} img={page} value='Page 1' />
            {num.map((num, index)=>(
                <MenuButton key={index} handleClick={showSlide} handleEvent={handleEvent} img={page} value={`Page ${index+2}`} />
            ))}
        </div>
    )
}
