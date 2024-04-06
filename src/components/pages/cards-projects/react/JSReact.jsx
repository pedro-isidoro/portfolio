import { useNavigate } from "react-router-dom";
import BasicReactQuest from '/src/images/html-css-javascript-react/quest-react-basico.png'
import portfolio from '/src/images/html-css-javascript-react/my-portfolio.png'
import desafio01Alura from '/src/images/html-css-javascript-react/conversor.png'
import myRecipes from '/src/images/html-css-javascript-react/my-recipes.png'

function JSReact(){
    const navigate = useNavigate();

    const handleHtmlCssProjects = () =>{
        return navigate("/projects/cards-projects/html-css")
    }
    const handleJSProjects = () =>{
        return navigate("/projects/cards-projects/html-css-js")
    }

    return(
        <section className='react-projects flex-row main-card main-projects-html-css-js-react-card'>
            <div className='projects-buttons flex-column'>
                <button className="btn" onClick={handleHtmlCssProjects}>HTML/CSS</button>
                <button className="btn" onClick={handleJSProjects}>JavaScript</button>
            </div>
            <div className='react-project-list flex-row'>
                <ul className="react-project flex-row">
                    <li className="project flex-column">
                        <div className='project-front flex-column'>                            
                            <h3>Quest de React Básico</h3>
                            <img src={BasicReactQuest} className="image-link" />
                        </div>
                        <div className='project-back'>
                            <p>Um desafio do Curso DevQuest do módulo de React básico.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/quest-basic-react" target="_blank">GitHub Repository</a>
                                <a href="https://quest-basic-react-ch24tkbah-pedro-isidoros-projects.vercel.app/" target="_blank">Vercel</a>
                            </div>
                        </div>
                    </li>
                    <li className="project flex-column">
                        <div className='project-front flex-column'>                            
                            <h3>Portfólio</h3>
                            <img src={portfolio} className="image-link" />
                        </div>
                        <div className='project-back'>    
                            <p>Reconstrui meu antigo portifólio, trazendo meus novos conhecimentos adquiridos com o tempo de estudo, esforço e prática.</p>                        
                            <div className="github-links  flex-row">
                                <a href="https://github.com/pedro-isidoro/portfolio" target="_blank">GitHub Repository</a>
                                <a href="/">Vercel</a>
                            </div>
                        </div>
                    </li>
                    
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Conversor</h3>
                            <img src={desafio01Alura} className="image-link" />
                            </div>
                        <div className='project-back'>
                            <p>Desafio proposta na imersão Alura, para se criar um conversor de valores.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/Alura-Desafio01" target="_blank">GitHub Repository</a>
                                <a href="https://alura-desafio01-4loruaozz-pedro-isidoros-projects.vercel.app/" target="_blank">Vercel</a>
                            </div>
                        </div>
                    </li> 
                    
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Pessoal</h3>
                            <img src={myRecipes} className="image-link" />
                            </div>
                        <div className='project-back'>
                            <p>Uma Landing Page para armazenar minhas receitas preferidas, e para facilitar usei React Rounter na navegação.</p>
                            <div className="github-links flex-row">
                                <a href="https://github.com/pedro-isidoro/my-recipes" target="_blank">GitHub Repository</a>
                                <a href="https://my-recipes-three.vercel.app/" target="_blank">Vercel</a>
                            </div>
                        </div>
                    </li> 
                </ul>
            </div>
        </section>
    );
};

export default JSReact