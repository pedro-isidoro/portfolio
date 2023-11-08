import './skills.css'

function Skills (){
    return(
        <section className='skills flex-column main-card main-skills-card'>
            <div className='languages-skills flex-row'>
                <div className="languages flex-column">
                    <h2 className='heading-2'>Linguagens de Programação</h2>
                    <ul>
                        <li className="html"><a href="https://www.w3schools.com/html/" target='_blank'>HTML5</a></li>
                        <li className="css"><a href="https://www.w3schools.com/css/" target="_blank">CSS3</a></li>
                        <li className="js"><a href="https://www.w3schools.com/js/" target="_blank">JavaScript (Intemediário)</a></li>
                    </ul>
                </div>
                <div className="library flex-column">
                    <h2 className='heading-2'>Bibliotecas</h2>
                    <ul>
                        <li className="react"><a href="https://react.dev/" target='_blank'>React (Intermediário)</a></li>
                        <li className="react-hook-form"><a href="https://react-hook-form.com/" target='_blank'>React Hook Form (Básico)</a></li>
                        <li className="react-rounter"><a href="https://reactrouter.com/en/main" target='_blank'>React Router (Básico)</a></li>
                    </ul>
                </div>
            </div>
            <div className='soft-skills flex-column'>
                <h2 className='heading-2'>Competências Comportamentais</h2>
                <ul>
                    <li>Boa Comunicação</li>
                    <li>Honestidade</li>
                    <li>Curiosidade</li>
                    <li>Esforço</li>
                    <li>Muita vontade de aprender</li>
                    <li>Flexibilidade</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills