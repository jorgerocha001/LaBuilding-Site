import React from 'react';
import './Card.css';
export default function Card(props){
    return(
        <div className='CardContainer'>
            <h1 className='CardTitle'>{props.title}</h1>
            <div className='CardInsideContainer'>
                <p>{props.text}</p>
            </div>
        </div>
    )
}