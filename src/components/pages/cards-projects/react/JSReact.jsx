import { useNavigate } from "react-router-dom";
import BasicReactQuest from '/src/images/html-css-javascript-react/quest-react-basico.png'
import portfolio from '/src/images/html-css-javascript-react/my-portfolio.png'

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
                            <p>Linguagens de marcação de hipertexto, usada principalmente para desenvolver páginas da web ou aplicativos.</p>
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
                            <p>Linguagens de marcação de hipertexto, usada principalmente para desenvolver páginas da web ou aplicativos.</p>                        
                            <div className="github-links  flex-row">
                                <a href="https://github.com/pedro-isidoro/portfolio" target="_blank">GitHub Repository</a>
                                <a href="/">Vercel</a>
                            </div>
                        </div>
                    </li>
                    {/*
                    <li className="project flex-column">
                        <div className='project-front flex-column'>
                            <h3>Pessoal</h3>
                            <img src={} className="image-link" />
                            </div>
                        <div className='project-back'>
                            <p>Linguagens de marcação de hipertexto, usada principalmente para desenvolver páginas da web ou aplicativos.</p>
                            <div className="github-links flex-row">
                                <a href="" target="_blank">GitHub Repository</a>
                                <a href="" target="_blank">GitHub Pages</a>
                            </div>
                        </div>
                    </li> 
                    */}
                </ul>
            </div>
        </section>
    );
};

export default JSReact