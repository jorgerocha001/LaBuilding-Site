import React from 'react'
import Box from '../../../Components/Box'
import './About.css'
export default function About(){
    return(
        <>
            <div className='AboutContainer'>
                <div className='titleContainer'>
                    <h1 className='title'>Conheça quem</h1> 
                    <h1 className='title2'>somos</h1>
                </div>
                    <hr className='LineTitle'/>
                    <div className='ContentContainer'>
                        <Box title="Lorem Ipsum"
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                         but also the leap into electronic typesetting, remaining."/>
                    </div>
            </div>
        </>
    )
}