import { useNavigate } from "react-router-dom";
import MoviesLibraryGif from '/src/images/gifs/html-css/biblioteca-pessoal.gif'
import LibraryGif from '/src/images/gifs/html-css/bliblioteca-de-livros-pessoal.gif'
import AnniversaryGif from '/src/images/gifs/html-css/anniversary-project.gif'

import './html-css.css'

function HtmlCss(){
    // redirect - redirecionamento na lógica
    const navigate = useNavigate();
    const handleJSProjects = () =>{
        // console.log("Contato enviado!")
        return navigate("/projects/gifs-projects/html-css-js")
    }
    const handleReactProjects = () =>{
        return navigate("/projects/gifs-projects/html-css-js-react")
    }

    return(
        <section className='html-css-projects flex-column main-card'>
                <div className="html-css-project flex-row">
                    <div className="project flex-column">
                        <h3>"Biblioteca" de séries</h3>
                        <a href="https://pedro-isidoro.github.io/projeto-pessoal/" target="_blank" className="image-link">
                            <img src={MoviesLibraryGif} alt="Gif do projeto" />
                        </a>
                        <div className="github-links flex-row">
                            <a href="https://github.com/pedro-isidoro/Projeto-Pessoal" target="_blank">GitHub Repository</a>
                            <a href="https://pedro-isidoro.github.io/projeto-pessoal/" target="_blank">GitHub Pages</a>
                        </div>
                    </div>
                    <div className="project flex-column">
                        <h3>Biblioteca Pessoal</h3>
                        <a href="https://pedro-isidoro.github.io/parchment-of-books/" target="_blank" className="image-link">
                            <img src={LibraryGif} alt="Gif do projeto" />
                        </a>
                        <div className="github-links  flex-row">
                            <a href="https://github.com/pedro-isidoro/newspaper-style-books.git" target="_blank">GitHub Repository</a>
                            <a href="https://pedro-isidoro.github.io/parchment-of-books/" target="_blank">GitHub Pages</a>
                        </div>
                    </div>
                    <div className="project flex-column">
                        <h3>Projeto de Aniversário</h3>
                        <a href="https://pedro-isidoro.github.io/anniversary-project/" target="_blank" className="image-link">
                            <img src={AnniversaryGif} alt="Gif do projeto" />
                        </a>
                        <div className="github-links flex-row">
                            <a href="https://github.com/pedro-isidoro/anniversary-project" target="_blank">GitHub Repository</a>
                            <a href="https://pedro-isidoro.github.io/anniversary-project/" target="_blank">GitHub Pages</a>
                        </div>
                    </div>
                </div>
                <div className='flex-row'>
                    <button className="btn" onClick={handleJSProjects}>JavaScript</button>
                    <button className="btn" onClick={handleReactProjects}>React</button>
                </div>
            </section>
    );
};

export default HtmlCss