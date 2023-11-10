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
                            <p>É uma linguagens de marcação de hipertexto, usada principalmente para desenvolver páginas da web ou aplicativos.</p>
                        </div>
                    </li>
                    <li className="css flex-column">
                        <div className='front'>
                            <i className='css fab fa-css3-alt css'/>
                            <p className='css'>CSS3</p>
                        </div>
                        <div className='back'>
                            <p>CSS é a linguagem que usamos para estilizar um documento HTML.<br/>CSS descreve como os elementos HTML devem ser exibidos.</p>
                        </div>
                    </li>
                    <li className="js flex-column">
                        <div className='front'>
                            <i className='js fab fa-js-square js'/>
                            <p className='js'>JavaScript <br/> (Intemediário)</p>
                        </div>
                        <div className='back'>
                            <p>JavaScript é a linguagem de programação mais popular do mundo.<br/>JavaScript é a linguagem de programação da Web.</p>
                        </div>
                    </li>
                    <li className="flex-column react blue-color">
                        <div className='front'>
                            <i className="blue-color fab fa-react library-hover" />
                            <p className='blue-color'>React <br/> (Intermediário)</p>
                        </div>
                        <div className='back'>
                            <p>É a biblioteca para interfaces de usuário web e nativas. <br/>Criando interfaces de usuário a partir de peças individuais chamadas componentes escritos em JavaScript.</p>
                        </div>
                    </li>
                    <li className="flex-column react-hook-form blue-color">
                        <div className='front'>
                            <p className='blue-color'>React Hook Form <br/> (Básico)</p>
                        </div>
                        <div className='back'>
                            <p>É uma biblioteca para formulários de alto desempenho, flexíveis e extensíveis com validação fácil de usar.</p>
                        </div>
                    </li>
                    <li className="flex-column react-rounter blue-color">
                        <div className='front'>
                            <p className='blue-color'>React Router <br/> (Básico)</p>
                        </div>
                        <div className='back'>
                            <p>React Router permite "roteamento do lado do cliente".<br/>Isso permite experiências de usuário mais rápidas.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills