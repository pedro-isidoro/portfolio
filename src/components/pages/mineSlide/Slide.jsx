import slideVideo from "/src/images/about-me.mp4"
import slideImage from "/src/images/slide-image.png"

function Slide (){
    return(
        <section className='slide-video about flex-row'>
            <div className='slide-div about-text flex-column'>
                <h2 className='heading-2'>Um pouco mais sobre minha vida</h2>
                <video controls width="750" height="500" poster={slideImage}>    
                    <source src={slideVideo} type="video/mp4" />
                    <p>Esse navegador não tem suporte para a tag vídeo.</p>
                </video>
            </div>
        </section>
    );
};

export default Slide