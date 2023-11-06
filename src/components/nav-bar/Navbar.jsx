import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar(){
    return(
        <header className='header'>
            <div className='logo'>
                <h1>Portfólio</h1>
            </div>
            <nav className='menus flex-column'>
                <input type="checkbox" id="menu-hamburguer" />
                
                <label htmlFor="menu-hamburguer">
                    <div className="menu-2">
                        <span className="hamburguer"></span>
                    </div>
                </label>
                {/*Para a navegação com o react router*/}
                <ul className="menu flex-row">
                    <li><Link to="/" className='link'>Bio</Link></li>
                    <li><Link to="/skills" className='link'>Habilidades</Link></li>
                    <li><Link to="/studies" className='link'>Estudos</Link></li>
                    <li><Link to="/projects" className='link'>Projetos</Link></li>
                    <li><Link to="/contacts" className='link'>Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar