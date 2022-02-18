import React from 'react'
import About from './About/About'
import Home1 from './Home-hero/Home1' 

export default function Home(){
    //Aqui deve ser colocado todos os componentes da página Home.
    return(
        <>
            <h1>Home</h1>
            <h2>Menu</h2>
            <Home1/>
            <About/>
            <h3>Footer</h3>
        </>
    )

}