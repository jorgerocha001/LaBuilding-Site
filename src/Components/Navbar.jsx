import {useState} from 'react'
import './Navbar.css'
import logo from '../images/lb-logo.png'
import MenuIcon from '@material-ui/icons/Menu'

function Navbar(){
    const [showLinks, setShowLinks] = useState(false);

    return (
        <header className='header'>
            <nav className='navbar'>
                <a href="/" className='logo'> <img src={logo} alt="Logo LaBuilding"/> </a>
            
                <div className={showLinks ? "links hidden" : "links"}>
                    <a href='/'>SOBRE</a>
                    <a href='/'>PARCEIROS</a>
                    <a href='/'>COMUNIDADE</a>
                    <a href='/'>AÇÕES</a>
                    <a href='/'>CONTATO</a>
                    <a href='/' className='hidden-newsletter'>NEWSLETTER</a>
                </div>
            </nav>
                <div className="newsletter links">
                    <a href='/'>NEWSLETTER</a>
                </div>
                <button className='botaonavbar' onClick={()=>setShowLinks(!showLinks)}> <MenuIcon/> </button>
        </header>
)

}

export default Navbar