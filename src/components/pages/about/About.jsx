import './about.css'
import image from '/src/images/Foto-minha.jpg'

function About (){
    return(
        <section className='about flex-row main-card main-about-card'>
            <div className='about-me flex-column'>
                <img src={image} alt="Imagem da minha pessoa" />
                <h2 className='heading-2'>Pedro Luis De Souza Isidoro</h2>
                <h3>Estagiário Desenvolvedor Frontend</h3>
                <p>20 anos | São Paulo - São Paulo</p>
            </div>
            <div className='about-text flex-column'>
                <h2 className='heading-2'>Sobre</h2>
                <p>
                    Moro na Zona Leste de São Paulo.<br />
                    Atualmente estou estudando <span>HTML, CSS e JavaScript</span>. Meus principais hobbies estão entre ir para a academia e ver filmes e séries. <br />
                    Pratiquei por 3 anos e meio Jiu-Jitsu com esse tempo no esporte, aprendi a ter <span>disciplina, rotina, dedicação</span>, além de <span>paciência e respeito </span> pelos mais experientes. E espero crescer ainda mais nesses quesitos, de <span>conhecimento, experiência, cultura e maturidade</span> no meu futuro estágio.
                </p>
            </div>
        </section>
    );
};

export default About