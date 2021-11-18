import React from 'react'

export default function Button({value, handleEvent, id}) {

    return (
        <div onClick={handleEvent? ()=> handleEvent(): ()=>{}} id={id? `${id}`: ''}  className="button__container">
        <button className="button__head" id={id? 'button__head': ''}>
            <div className="button__title">{value}</div>
        </button>
    </div>
    )
}
