import './skills.css'

function Skills (){
    return(
        <section className='skills flex-column main-card main-skills-card'>
            <div className='languages-skills flex-row'>
                <div className="languages flex-column">
                    <h2 className='heading-2'>Linguagens de Programação</h2>
                    <ul>
                        <li className="html">
                            <a className="html" href="https://www.w3schools.com/html/" target='_blank'><i className='html fab fa-html5 html'/>HTML5</a>
                        </li>
                        <li className="css">
                            <a className="css" href="https://www.w3schools.com/css/" target="_blank"><i className='css fab fa-css3-alt css'/>CSS3</a>
                        </li>
                        <li className="js">
                            <a className="js" href="https://www.w3schools.com/js/" target="_blank"><i className='js fab fa-js-square js'/>JavaScript (Intemediário)</a>
                        </li>
                    </ul>
                </div>
                <div className="library flex-column">
                    <h2 className='heading-2'>Bibliotecas</h2>
                    <ul>
                        <li className="library-hover react blue-color">
                            <a className='blue-color library-hover' href="https://react.dev/" target='_blank'><i className="blue-color fab fa-react library-hover" />React (Intermediário)</a>
                        </li>
                        <li className="library-hover react-hook-form blue-color">
                            <a className='blue-color library-hover' href="https://react-hook-form.com/" target='_blank'>React Hook Form (Básico)</a>
                        </li>
                        <li className="library-hover react-rounter blue-color">
                            <a className='blue-color library-hover' href="https://reactrouter.com/en/main" target='_blank'>React Router (Básico)</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='soft-skills flex-column'>
                <h2 className='heading-2'>Competências Comportamentais</h2>
                <ul>
                    <li className='blue-color'>Boa Comunicação</li>
                    <li className='blue-color'>Honestidade</li>
                    <li className='blue-color'>Curiosidade</li>
                    <li className='blue-color'>Esforço</li>
                    <li className='blue-color'>Muita vontade de aprender</li>
                    <li className='blue-color'>Flexibilidade</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills