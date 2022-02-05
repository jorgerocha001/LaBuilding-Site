import React from 'react';
import Titles from '../../../Components/Titles';
import './Contact.css';
import igLogo from '../../../assets/pngwing.com.png';
import linkLogo from '../../../assets/image 1.png';
import ytLogo from '../../../assets/image 2.png';

export default function Contact(){
    return(
        <>
            <div className='Contact'>
                <Titles title={"Entre em "} titlebold={"contato"}/>
                <div className='mainContact'>
                    <div className='blackSquare'>Aqui fica o form</div>
                    <div className='orangeBlock'>
                        <div className='titlee'>Contato</div>
                        <div className='link'>
                            <img className='img_ig' src={igLogo} alt="instagram logo"/>
                            <div className='break'>
                                <a href='https://www.instagram.com/labuilding_/'>@labuilding_</a>
                                <a href='https://www.instagram.com/_b.connect/'>@_b.connect</a>
                            </div>
                        </div>
                        <div className='link'>
                            <img className='img_ig' src={linkLogo} alt="Linkedin logo"/>
                            <a href='https://www.linkedin.com/company/labuilding/about/'>labuilding</a>
                        </div>
                        <div className='link'>
                            <img className='img_ig' src={ytLogo} alt="Linkedin logo"/>
                            <a href='https://www.linkedin.com/company/labuilding/about/'>LaBuilding</a>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    )
}