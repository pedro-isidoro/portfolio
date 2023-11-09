import Formulary from '/src/components/form/Form.jsx'
import './contacts.css'
const   CVToDownload = '/src/cv/curriculo-pedro.pdf'

function Contacts(){
    return(
        <section className='contacts flex-row main-card main-projects-contacts-card' id='form'>
            <Formulary className='form-contact'/>
            <div className="nets-contacts flex-column">
                <div className='net-contact'>
                    <ul className='nets flex-row'>
                        <li><a href="https://github.com/pedro-isidoro" target="_blank"><i className="fab fa-github github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/pedro-isidoro-8b1680272/" target="_blank"><i className="fab fa-linkedin linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/pedrol.isidoro/" target="_blank"><i className="fab fa-instagram instagram"></i></a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5511970601261&text=Ol%C3%A1,%20Tudo%20bem?%0AMe%20chamo%20Pedro%20Isidoro." target="_blank"><i className="fab fa-whatsapp whatsapp"></i></a></li>
                    </ul>
                </div>
                <div className='contact'>
                    <p>E-mail: <span>pedrol.isidoro@yaho.com</span></p>
                    <p>Tel: <span>(11) 97060-1261</span></p>
                </div>
                {/* Para baixar meu CV */}
                <button className='btn-cv'><a href={CVToDownload} target='_blank' download="curriculo-pedro.pdf" type='	application/pdf'>Baixar CV</a></button>
                {/* O type peguei daqui: https://www.iana.org/assignments/media-types/media-types.xhtml */}
            </div>
        </section>
    );
};

export default Contacts