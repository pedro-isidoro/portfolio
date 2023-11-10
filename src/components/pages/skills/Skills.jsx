import './skills.css'

function Skills (){
    return(
        <section className='skills flex-row main-card main-skills-card'>
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
            <div className='languages-skills flex-column'>
                <h2 className='heading-2'>Competências Técnicas</h2>
                <ul className='languages flex-row'>
                    <li className="html flex-column">
                        <div className='front'>
                            <i className='html fab fa-html5 html'/>
                            <p className='html'>HTML5</p>
                        </div>
                        <div className='back'>
                            <p>Linguagens de marcação de hipertexto, usada principalmente para desenvolver páginas da web ou aplicativos.</p>
                        </div>
                    </li>
                    <li className="css flex-column">
                        <div className='front'>
                            <i className='css fab fa-css3-alt css'/>
                            <p className='css'>CSS3</p>
                        </div>
                        <div className='back'>
                            <p>Linguagem que usamos para estilizar um documento HTML.</p>
                        </div>
                    </li>
                    <li className="js flex-column">
                        <div className='front'>
                            <i className='js fab fa-js-square js'/>
                            <p className='js'>JavaScript <br/> (Intemediário)</p>
                        </div>
                        <div className='back'>
                            <p>Linguagem de programação da Web e a linguagem de programação mais popular do mundo.</p>
                        </div>
                    </li>
                    <li className="flex-column react blue-color">
                        <div className='front'>
                            <i className="blue-color fab fa-react library-hover" />
                            <p className='blue-color'>React <br/> (Intermediário)</p>
                        </div>
                        <div className='back'>
                            <p>É a biblioteca para interfaces de usuário web e nativas.</p>
                        </div>
                    </li>
                    <li className="flex-column react-hook-form blue-color">
                        <div className='front'>
                            <p className='blue-color'>React Hook Form <br/> (Básico)</p>
                        </div>
                        <div className='back'>
                            <p>Biblioteca para formulários de alto desempenho, flexíveis e extensíveis com validação.</p>
                        </div>
                    </li>
                    <li className="flex-column react-rounter blue-color">
                        <div className='front'>
                            <p className='blue-color'>React Router <br/> (Básico)</p>
                        </div>
                        <div className='back'>
                            <p>Permite "roteamento do lado do cliente", e isso traz experiências de usuário mais rápidas.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills