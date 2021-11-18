import React from 'react'
import textI from '../images/text.svg'
import filterI from '../images/filter.svg'
import MenuButton from './MenuButton';

export default function Properties({handleEvent, id}) {
    const [state, setstate] = React.useState(true)
    const text = () =>{
        let item = document.getElementById(id).lastChild.classList;
        if (state){
            item.remove('none')
            setstate(false)
        }else{
            item.add('none')
            setstate(true)
        }
    }
    const filter = () =>{
        console.log('filter')
    }
    return (
        <div className="menu menu--properties">
                <MenuButton handleClick={text} handleEvent={handleEvent} img={textI} value='Text' />
                <MenuButton handleClick={filter} handleEvent={handleEvent} img={filterI} value='Filter' />  
        </div>


    )
}
