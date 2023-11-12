import { useNavigate } from "react-router-dom";
import MoviesLibraryGif from '/src/images/html-css/bliblioteca-de-livros-pessoal.png'
import LibraryGif from '/src/images/html-css/biblioteca-pessoal.png'
import AnniversaryGif from '/src/images/html-css/anniversary-project.png'
import LandingPageGif from '/src/images/html-css/landing-page.png'

function HtmlCss(){
    // redirect - redirecionamento na lógica
    const navigate = useNavigate();
    const handleJSProjects = () =>{
        // console.log("Contato enviado!")
        return navigate("/projects/cards-projects/html-css-js")
    }
    const handleReactProjects = () =>{
        return navigate("/projects/cards-projects/html-css-js-react")
    }

    return(
        <section className='html-css-projects flex-row main-card main-projects-html-css-card'>
            <div className='projects-buttons flex-column'>
                <button className="btn" onClick={handleJSProjects}>JavaScript</button>
                <button className="btn" onClick={handleReactProjects}>React</button>
            </div>
            <div className="html-css-project-list flex-row">
                <ul className="html-css-project flex-row">
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>"Estante" de séries</h3>
                            <img src={MoviesLibraryGif} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um projeto pessoal mostrando minhas séries de livros e animações orientais e ocidentais vistas.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/Projeto-Pessoal" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/projeto-pessoal/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Biblioteca Pessoal</h3>
                            <img src={LibraryGif} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um projeto na forma de biblioteca, onde estarão a mostra livros os quais consumi desde minha pequenez.</p>
                            <div className="github-links  flex-row">
                                <a href="https://github.com/pedro-isidoro/newspaper-style-books.git" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/parchment-of-books/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
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
                            <h3>Landing Page</h3>
                            <img src={LandingPageGif} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um projeto introdutório de Landing Page do curso DevQuest.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/landing-page" target="_blank">GitHub Repository</a>
                                <a href="https://pedro-isidoro.github.io/landing-page/" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HtmlCss