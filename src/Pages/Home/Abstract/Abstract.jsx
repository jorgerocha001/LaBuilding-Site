import React from 'react';
import './Abstract.css';
import Box from "../../../Components/Box"
import '../../../Components/Line.css';

export default function Abstract(){
    return(
        <div className='Abstract_Container'>
            <div className='titleContainer'>
                <h1 className='title'>Conheça nossa</h1> 
                <h1 className='title2'>Comunidade</h1>
            </div>
            <hr className='LineTitle'/>
            <div className='Box-Container'>
                <Box 
                    title="What is Lorem Ipsum" 
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
                    also the leap into electronic typesetting, remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining." 
                    reverse/>
            </div>
        </div>
    )
}