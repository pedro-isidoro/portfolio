import collegeImage from '/src/images/faculdade-anhembi.jpg'
import courseImage from '/src/images/curso-dev-quest.jpeg'
import './studies.css'

function Studies(){
    return(
        <>
            <section className='studies flex-row main-card main-studies-card'>
                <div className="language-studies flex-column">
                    <h2 className='heading-2'>Idiomas</h2>
                    <ul>
                        <li>Português <span>Nativo</span></li>
                        <li>Inglês <span>Básico a Intermediário</span></li>
                    </ul>
                </div>
                <div className="academic-studies">
                    <div className="college flex-row">
                        <img src={collegeImage} alt="Imagem da Faculdade" />
                        <div className="text">
                            <h2 className='heading-2'><a href="https://loja.anhembionline.com.br/graduacao?gad_source=1&gclid=Cj0KCQiAo7KqBhDhARIsAKhZ4ui2e-bT2HjzfR-ZF3Z3OWLLmZIlg4gj68jpjXmhrcBXmA9yIaYaGXkaAl9YEALw_wcB" target="_blank">Universidade Anhembi Morumbi</a></h2>
                            <ul>
                                <li>Bacharelado em Ciências da Computação</li>
                                <li>Início: <span>2022</span></li>
                                <li>Previsão de Término: <span>2025</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="course flex-row">
                        <img src={courseImage} alt="Imagem do Curso DevQuest" />
                        <div className="text">
                            <h2 className='heading-2'><a href="https://www.linkedin.com/school/devquest-dev-em-dobro/" target="_blank">DevQuest - Dev em Dobro</a></h2>
                            <ul>
                                <li>Treinamento em desenvolvimento web com mentoria e suporte.</li>
                                <li>Início: <span>Dezembro 2022</span></li>
                                <li>Término: <span>Em andamento</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Studies