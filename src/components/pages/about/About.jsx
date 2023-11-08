import image from '/src/images/Foto-minha.jpg'
import './about.css'

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
                    Moro na Zona Leste de São Paulo.<br/>
                    Atualmente estou cursando meu 4° semestre de Ciência da Computação, e paralelamente estou estudando no curso DevQuest <span>HTML, CSS, JavaScript e React</span>. <br/><br/>
                    Meus principais hobbies estão entre me exercitar na academia, ler livros e assistir filmes e séries. <br/>
                    Pratiquei Jiu-Jitsu por um tempo, e com ele consegui aprender a ter, <span>disciplina, rotina e dedicação</span>, além de <span>paciência e respeito </span> pelos mais experientes. <br/><br/>
                    Hoje estou á procura de uma oportunidade de adentrar no mercado de trabalho, e espero crescer ainda mais nesses quesitos de <span>conhecimento, experiência, cultura e maturidade</span> no meu futuro estágio.
                </p>
            </div>
        </section>
    );
};

export default About