import { Link } from 'react-router-dom';
import './navbar.css'

function NavBar(){
    return(
        <header>
            <div className='logo'>
                <h1>Portfólio</h1>
            </div>
            <nav className='menu flex-row'>
                {/*Para a navegação com o react router*/}
                <Link to="/" className='link'>Bio</Link>
                <Link to="/skills" className='link'>Habilidades</Link>
                <Link to="/studies" className='link'>Estudos</Link>
                <Link to="/projects" className='link'>Projetos</Link>
                <Link to="/contacts" className='link'>Contato</Link>
            </nav>
        </header>
    );
};

export default NavBar