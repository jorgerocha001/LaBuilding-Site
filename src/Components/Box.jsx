import React from 'react';
import './Box.css';

export default function Box(props){
    return(
        <div className='FullContainer'>
            <div className='BoxContainer'>
                {props.reverse === false ? (
                    <>
                        <div className="ControlContainer">
                        <div className='LeftBoxContainer'>
                        </div>
                        <div className='BoxInsideContainer'>
                            <h1 className='titleprops'>{props.title}</h1>
                            <div className='TextBoxInside'>
                                <p>{props.text}</p>
                            </div>
                        </div>
                        </div>
                </>
                ): (
                    <>
                        <div className="ControlContainer">
                            <div className='BoxInsideContainer2'>
                                <h1 className='titleprops'>{props.title}</h1>
                                    <div className='TextBoxInside'>
                                        <p>{props.text}</p>
                                    </div>
                                </div>
                            <div className='RightBoxContainer'>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}