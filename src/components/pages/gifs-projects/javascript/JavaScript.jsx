import { useNavigate } from "react-router-dom";
import AdviceGenerator from '/src/images/gifs/html-css-javascript/gerador-de-conselhos.gif'
import ValidationForm from '/src/images/gifs/html-css-javascript/quest-js-intermediaria.gif'
import PedroFlix from '/src/images/gifs/html-css-javascript/pedroflix.gif'

import './javascript.css'

function JavaScript(){
    const navigate = useNavigate();

    const handleHtmlCssProjects = () =>{
        return navigate("/projects/gifs-projects/html-css")
    }
    const handleReactProjects = () =>{
        return navigate("/projects/gifs-projects/html-css-js-react")
    }

    return(
        <section className='js-projects flex-column main-card'>
            <div className="js-project flex-row">
                <div className="project flex-column">
                    <h3>Gerador de Conselhos</h3>
                    <a href="https://pedro-isidoro.github.io/meu-gerador-de-conselho/" target="_blank" className="image-link">
                        <img src={AdviceGenerator} alt="Gif do projeto" />
                    </a>
                    <div className="github-links flex-row">
                        <a href="https://github.com/pedro-isidoro/meu-gerador-de-conselho" target="_blank">GitHub Repository</a>
                        <a href="https://pedro-isidoro.github.io/meu-gerador-de-conselho/" target="_blank">GitHub Pages</a>
                    </div>
                </div>
                <div className="project flex-column">
                    <h3>Quest JS Avançado</h3>
                    <a href="https://pedro-isidoro.github.io/quest-intermediaria-form-com-validacao/" target="_blank" className="image-link">
                        <img src={ValidationForm} alt="Gif do projeto" />
                    </a>
                    <div className="github-links  flex-row">
                        <a href="https://github.com/pedro-isidoro/quest-intermediaria-form-com-validacao" target="_blank">GitHub Repository</a>
                        <a href="https://pedro-isidoro.github.io/quest-intermediaria-form-com-validacao/" target="_blank">GitHub Pages</a>
                    </div>
                </div>
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
            </div>
            <div className='flex-row'>
                <button className="btn" onClick={handleHtmlCssProjects}>HTML/CSS</button>
                <button className="btn" onClick={handleReactProjects}>React</button>
            </div>
        </section>
    );
};

export default JavaScript