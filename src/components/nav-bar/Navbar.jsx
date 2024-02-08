import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar(){
    function responsiveMenu(){
        const menuUL = document.getElementById('menu-items');
        const menuIcon = document.getElementById('hamburguer');
        const header2 = document.getElementById('responsive-header')
        
        menuUL.classList.toggle('menu-reponsive');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
        header2.classList.toggle('header2');
    };

    return(
        <header className='header' id='responsive-header'>
            <div className='logo'>
                <h1>Portfólio</h1>
            </div>
            <nav className='menus flex-column'>
                <i className='hamburguer fa-solid fa-bars' id='hamburguer' onClick={responsiveMenu}/>
                {/*Para a navegação com o react router*/}
                <ul className="menu flex-row" id='menu-items'>
                    <li><Link to="/" className='link'>Bio</Link></li>
                    <li><Link to="/skills" className='link'>Habilidades</Link></li>
                    <li><Link to="/studies" className='link'>Estudos</Link></li>
                    <li><Link to="/projects" className='link'>Projetos</Link></li>
                    <li><Link to="/mine-slide-show" className='link'>Slide-Show</Link></li>
                    <li><Link to="/contacts" className='link'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar