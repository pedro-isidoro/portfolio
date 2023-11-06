import './skills.css'

function Skills (){
    return(
        <section className='skills flex-column main-card'>
            <div className='languages-skills flex-row'>
                <div className="languages flex-column">
                    <h2 className='heading-2'>Linguagens de Programação</h2>
                    <ul>
                        <li className="html">HTML5</li>
                        <li className="css">CSS3</li>
                        <li className="js">JavaScript (Intemediário)</li>
                    </ul>
                </div>
                <div className="library flex-column">
                    <h2 className='heading-2'>Bibliotecas</h2>
                    <ul>
                        <li className="react">React (Intermediário)</li>
                        <li className="react-hook-form">React Hook Form (Básico)</li>
                        <li className="react-rounter">React Router (Básico)</li>
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