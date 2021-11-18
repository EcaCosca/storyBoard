import React, { useState, useEffect, useRef } from 'react'
import RemixDiv from './RemixDiv'
import x from '../images/x.svg'
// Female imports
// face
import facial1 from '../images/facial_exp-1.svg'
import facial2 from '../images/facial_exp-2.svg'
import facial3 from '../images/facial_exp-3.svg'
import facial4 from '../images/facial_exp-4.svg'
import facial5 from '../images/facial_exp-5.svg'
// dress
import dress1 from '../images/dress-1.svg'
import dress2 from '../images/dress-2.svg'
import dress3 from '../images/dress-3.svg'
import dress4 from '../images/dress-4.svg'
import dress5 from '../images/dress-5.svg'
// hair
import hair1 from '../images/hair-1.svg'
import hair2 from '../images/hair-2.svg'
import hair3 from '../images/hair-3.svg'
import hair4 from '../images/hair-4.svg'
import hair5 from '../images/hair-5.svg'
// back hair
import bhair1 from '../images/back_hair.svg'
import bhair2 from '../images/back_hair_2.svg'
import bhair3 from '../images/none.svg'

// shoes
import shoes1 from '../images/shoes-1.svg'
import shoes2 from '../images/shoes-2.svg'
import shoes3 from '../images/shoes-3.svg'
import shoes4 from '../images/shoes-4.svg'
import shoes5 from '../images/shoes-5.svg'

// Male imports
// face
import facial1M from '../images/male/facial_exp_1.svg'
import facial2M from '../images/male/facial_exp_2.svg'
import facial3M from '../images/male/facial_exp_3.svg'
import facial4M from '../images/male/facial_exp_4.svg'
import facial5M from '../images/male/facial_exp_5.svg'
// hair
import hair1M from '../images/male/hair_1.svg'
import hair2M from '../images/male/hair_2.svg'
import hair3M from '../images/male/hair_3.svg'
import hair4M from '../images/male/hair_4.svg'
import hair5M from '../images/male/hair_5.svg'
// shoes
import shoes1M from '../images/male/shoes_1.svg'
import shoes2M from '../images/male/shoes_2.svg'
import shoes3M from '../images/male/shoes_3.svg'
import shoes4M from '../images/male/shoes_4.svg'
// shirt
import shirt1 from '../images/male/shirt_1.svg'
import shirt2 from '../images/male/shirt_2.svg'
import shirt3 from '../images/male/shirt_3.svg'
import shirt4 from '../images/male/shirt_4.svg'
import shirt5 from '../images/male/shirt_5.svg'
// pants
import pants1 from '../images/male/pants_1.svg'
import pants2 from '../images/male/pants_2.svg'
import pants3 from '../images/male/pants_3.svg'
import pants4 from '../images/male/pants_4.svg'
// beard
import beard1 from '../images/male/beard_1.svg'
import beard2 from '../images/male/beard_2.svg'
import beard3 from '../images/male/beard_3.svg'
import beard4 from '../images/male/beard_4.svg'

export default function Remix(props) {
    const remix = useRef();
    const remixDiv = useRef();
    const female = [
        {arr: [hair5, hair4, hair3, hair2, hair1], part: 'hair'},
        {arr: [bhair1, bhair2, bhair3], part: 'backHair'},
        {arr: [facial4, facial5, facial3, facial2, facial1], part: 'face'},
        {arr: [dress2, dress5, dress4, dress3, dress1], part: 'dress'},
        {arr: [shoes5, shoes4, shoes3, shoes2, shoes1], part: 'shoes'},
    ]
    const male = [
        {arr: [hair1M, hair2M, hair3M, hair4M, hair5M], part: 'hair'},
        {arr: [facial2M, facial1M, facial3M, facial4M, facial5M], part: 'face'},
        {arr: [beard1, beard2, beard3, beard4], part: 'beard'},
        {arr: [shirt1, shirt2, shirt3, shirt4, shirt5], part: 'shirt'},
        {arr: [pants1, pants2, pants3, pants4], part: 'pant'},
        {arr: [shoes1M, shoes2M, shoes3M, shoes4M], part: 'shoes'},
    ]
    useEffect(() => {
       let children = remix.current.children;
       Object.values(children).map((child)=>{
           child.addEventListener('mouseover', (e) => changeRemix(e))
       })
    //    props.setRemixDiv(remixDiv)
     }, [])
     
    const changeRemix = (e) =>{
       let children = remix.current.children;
       Object.values(children).map((child)=>{
           child.classList.remove('active')
       })
       e.target.parentElement.classList.add('active')
       e.target.parentElement.parentElement.classList.add('active')
       e.target.parentElement.parentElement.parentElement.classList.add('active')
    }

    return (
        <div id={props.id} ref={remixDiv} onMouseDown={() => props.setElement(remixDiv)} className="popup popup--remix remixes none" >
                    <div className="popup__container visible">
                        <button onClick={()=> remixDiv.current.classList.add('none')}  className="popup__close">
                            <img src={x}/>
                        </button>
                        <div  onMouseDown={() => props.setDraggable(true)} onMouseUp={() => props.setDraggable(false)} className="popup__head">
                        {props.gender === 'female' && <span>Female Remix</span>}
                        {props.gender === 'male' && <span>Male Remix</span>}
                            </div>
                        <div className="popup__body">
                            <div ref={remix} id='remix' className="remix">  
                            {props.gender === 'female' &&
                            (female.map((part, index) => (
                                    <RemixDiv objectK={props.objectK} key={index} id={props.id} 
                                    setRemixID={props.setRemixID} remixID={props.remixID}
                                     part={part.part} SliderData={part.arr}/>
                            )))} 
                            {props.gender === 'male' &&
                            (male.map((part, index) => (
                                    <RemixDiv objectK={props.objectK} key={index} id={props.id}
                                     setRemixID={props.setRemixID} remixID={props.remixID} 
                                     part={part.part} SliderData={part.arr}/>
                            )))}                     
                            </div>        
                        </div>
                    </div>
                </div>  
    )
}
