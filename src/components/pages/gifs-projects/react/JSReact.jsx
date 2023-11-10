import { useNavigate } from "react-router-dom";
import BasicReactQuest from '/src/images/gifs/html-css-javascript-react/quest-react-basico.gif'
import portfolio from '/src/images/gifs/html-css-javascript-react/my-portfolio.gif'

function JSReact(){
    const navigate = useNavigate();

    const handleHtmlCssProjects = () =>{
        return navigate("/projects/gifs-projects/html-css")
    }
    const handleJSProjects = () =>{
        return navigate("/projects/gifs-projects/html-css-js")
    }

    return(
        <section className='react-projects flex-row main-card main-projects-html-css-js-react-card'>
            <div className='projects-buttons flex-column'>
                <button className="btn" onClick={handleHtmlCssProjects}>HTML/CSS</button>
                <button className="btn" onClick={handleJSProjects}>JavaScript</button>
            </div>
            <div className='react-project-list flex-row'>
                <ul className="react-project flex-column">
                    <li className="project flex-column">
                        <h3>Quest de React Básico</h3>
                        <a href="https://pedro-isidoro.github.io/meu-gerador-de-conselho/" target="_blank" className="image-link">
                            <img src={BasicReactQuest} alt="Gif do projeto" />
                        </a>
                        <div className="github-links flex-row">
                            <a href="https://github.com/pedro-isidoro/quest-basic-react" target="_blank">GitHub Repository</a>
                            <a href="https://quest-basic-react-ch24tkbah-pedro-isidoros-projects.vercel.app/" target="_blank">Vercel</a>
                        </div>
                    </li>
                    <li className="project flex-column">
                        <h3>Portfólio</h3>
                        <a href="" target="_blank" className="image-link">
                            <img src={portfolio} alt="Gif do projeto" />
                        </a>
                        <div className="github-links  flex-row">
                            <a href="https://github.com/pedro-isidoro/portfolio" target="_blank">GitHub Repository</a>
                            <a href="https://my-portfolio-pxf0aru9o-pedro-isidoros-projects.vercel.app/" target="_blank">Vercel</a>
                        </div>
                    </li>
                    {/*
                    <li className="project flex-column">
                        <h3>Pessoal</h3>
                        <a href="https://pedro-isidoro.github.io/pedroflix-movie-slider/" target="_blank" className="image-link">
                            <img src={PedroFlix} alt="Gif do projeto" />
                        </a>
                        <div className="github-links flex-row">
                            <a href="https://github.com/pedro-isidoro/pedroflix-movie-slider" target="_blank">GitHub Repository</a>
                            <a href="https://pedro-isidoro.github.io/pedroflix-movie-slider/" target="_blank">GitHub Pages</a>
                        </div>
                    </li> 
                    */}
                </ul>
            </div>
        </section>
    );
};

export default JSReact