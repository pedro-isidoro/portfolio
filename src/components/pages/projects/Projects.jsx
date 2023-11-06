import { Link } from 'react-router-dom';
import './projects.css'

function Projects(){
    return(
        <section className='projects flex-column main-card'>
            <div className="title">
                <h2 className='heading-2'>Projetos</h2>
            </div>
            <ul className='links-projects flex-row'>
                <Link className='link-project' to="/projects/gifs-projects/html-css">HTML/CSS</Link>
                <Link className='link-project' to="/projects/gifs-projects/html-css-js">JavaScript</Link>
                <Link className='link-project' to="/projects/gifs-projects/html-css-js-react">React</Link>
            </ul>
        </section>
    );
};

export default Projects