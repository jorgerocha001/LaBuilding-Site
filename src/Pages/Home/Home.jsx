import React from 'react';
import About from './About/About';
import Abstract from './Abstract/Abstract';
import Contact from './Contact/Contact';

export default function Home(){
    //Aqui deve ser colocado todos os componentes da página Home.
    return(
        <>
            <About/>
            <Abstract/>
            <Contact/>
            <h3>Footer</h3>
        </>
    )

}