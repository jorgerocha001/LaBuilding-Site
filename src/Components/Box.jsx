import React from 'react';
import './Box.css';

export default function Box(props){
    return(
        <div className='FullContainer'>
            <div className='BoxContainer'>
                <h1>{props.title}</h1>
                <div className='BoxInside'>
                    <p>{props.text}</p>
                </div>
            </div>
            <div className='RightBoxContainer'>
           
            </div>
        </div>
    )
}