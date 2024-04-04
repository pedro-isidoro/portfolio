import { useNavigate } from "react-router-dom";
import AnniversaryGif from '/src/images/html-css-javascript/anniversary-project.png'
import simplePokedex from '/src/images/html-css-javascript/simple-pokedex.png'
import PokemonPhoto from '/src/images/html-css-javascript/carrossel-de-imagens-pokemon.png'
import PedroFlix from '/src/images/html-css-javascript/pedroflix.png'
import ValidationForm from '/src/images/html-css-javascript/quest-js-intermediaria.png'
import AdviceGenerator from '/src/images/html-css-javascript/gerador-de-conselhos.png'

function JavaScript(){
    const navigate = useNavigate();

    const handleHtmlCssProjects = () =>{
        return navigate("/projects/cards-projects/html-css")
    }
    const handleReactProjects = () =>{
        return navigate("/projects/cards-projects/html-css-js-react")
    }

    return(
        <section className='js-projects flex-row main-card main-projects-html-css-js-card'>
            <div className='projects-buttons flex-column'>
                <button className="btn" onClick={handleHtmlCssProjects}>HTML/CSS</button>
                <button className="btn" onClick={handleReactProjects}>React</button>
            </div>
            <div className="js-project-list flex-row">
                <ul className="js-project flex-row">
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Projeto de Aniversário</h3>
                            <img src={AnniversaryGif} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um projeto feito como Checklist para uma festa de aniversário.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/anniversary-project" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/anniversary-project/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Projeto Pokédex Simples</h3>
                            <img src={simplePokedex} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um projeto feito como prática e prelurdio para um mais avançado.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/simple-pokedex" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/simple-pokedex/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Carrossel de Cards Pokémon</h3>
                            <img src={PokemonPhoto} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um projeto contendo uma página com um carrossel de cards com imagem e informação de pokémons.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/carrossel-de-cartoes-pokemon" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/carrossel-de-cartoes-pokemon/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                    <li className="project flex-column">
                        <div className='project-front flex-column'>                            
                            <h3>Pedroflix</h3>
                            <img src={PedroFlix} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Uma landing page se espelhando em um modelo de streaming. Onde estarão carrosseis com imagens de filmes, em seus respectivos gêneros.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/pedroflix-movie-slider" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/pedroflix-movie-slider/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Quest JS Avançado</h3>
                            <img src={ValidationForm} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um desafio do curso DevQuest para se construir um formulário com validação.</p>
                            <div className="github-links  flex-row">
                                <a href="https://github.com/pedro-isidoro/quest-intermediaria-form-com-validacao" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/quest-intermediaria-form-com-validacao/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Gerador de Conselhos</h3>
                            <img src={AdviceGenerator} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um desafio do curso DevQuest, para criar um gerador de conselhos usando uma API.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/meu-gerador-de-conselho" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/meu-gerador-de-conselho/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default JavaScript