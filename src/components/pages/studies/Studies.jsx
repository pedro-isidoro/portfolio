import collegeImage from '/src/images/faculdade-anhembi.jpg'
import courseImage from '/src/images/curso-dev-quest.jpeg'
import './studies.css'

function Studies(){
    return(
        <>
            <section className='studies flex-row main-card'>
                <div className="academic-studies">
                    <div className="college flex-row">
                        <img src={collegeImage} alt="Imagem da Faculdade" />
                        <div className="text">
                            <h2>Universidade Anhembi Morumbi</h2>
                            <ul>
                                <li>Bacharelado em Ciências da Computação</li>
                                <li>Início: 2022</li>
                                <li>Previsão de Término: 2025</li>
                            </ul>
                        </div>
                    </div>
                    <div className="course flex-row">
                        <img src={courseImage} alt="Imagem do Curso DevQuest" />
                        <div className="text">
                            <h2>DeQuest - Dev em Dobro</h2>
                            <ul>
                                <li>Treinamento em desenvolvimento web com mentoria e suporte.</li>
                                <li>Início: Dezembro 2022</li>
                                <li>Término: Em andamento</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="language-studies flex-column">
                    <h2>Idiomas</h2>
                    <ul>
                        <li>Português <span>Nativo</span></li>
                        <li>Inglês <span>Básico a Intermediário</span></li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Studies