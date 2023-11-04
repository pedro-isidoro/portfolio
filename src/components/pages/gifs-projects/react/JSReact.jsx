import { useNavigate } from "react-router-dom";
import BasicReactQuest from '/src/images/gifs/html-css-javascript-react/quest-react-basico.gif'

import './js-react.css'

function JSReact(){
    const navigate = useNavigate();

    const handleHtmlCssProjects = () =>{
        return navigate("/projects/gifs-projects/html-css")
    }
    const handleJSProjects = () =>{
        return navigate("/projects/gifs-projects/html-css-js")
    }

    return(
        <section className='react-projects flex-column main-card'>
            <div className="react-project flex-row">
                <div className="project flex-column">
                    <h3>Quest de React Básico</h3>
                    <a href="https://pedro-isidoro.github.io/meu-gerador-de-conselho/" target="_blank" className="image-link">
                        <img src={BasicReactQuest} alt="Gif do projeto" />
                    </a>
                    <div className="github-links flex-row">
                        <a href="https://github.com/pedro-isidoro/quest-basic-react" target="_blank">GitHub Repository</a>
                        <a href="https://quest-basic-react-ch24tkbah-pedro-isidoros-projects.vercel.app/" target="_blank">GitHub Pages</a>
                    </div>
                </div>
                <div className="project flex-column">
                    <h3>Em andamento</h3>
                    <a href="" target="_blank" className="image-link">
                        {/* <img src={ValidationForm} alt="Gif do projeto" /> */}
                    </a>
                    <div className="github-links  flex-row">
                        <a href="">GitHub Repository</a>
                        <a href="" target="_blank">GitHub Pages</a>
                    </div>
                </div>
                {/*
                <div className="project flex-column">
                    <h3>Pessoal</h3>
                    <a href="https://pedro-isidoro.github.io/pedroflix-movie-slider/" target="_blank" className="image-link">
                        <img src={PedroFlix} alt="Gif do projeto" />
                    </a>
                    <div className="github-links flex-row">
                        <a href="https://github.com/pedro-isidoro/pedroflix-movie-slider" target="_blank">GitHub Repository</a>
                        <a href="https://pedro-isidoro.github.io/pedroflix-movie-slider/" target="_blank">GitHub Pages</a>
                    </div>
                </div> 
                */}
            </div>
            <div className='flex-row'>
                <button className="btn" onClick={handleHtmlCssProjects}>HTML/CSS</button>
                <button className="btn" onClick={handleJSProjects}>JavaScript</button>
            </div>
        </section>
    );
};

export default JSReact