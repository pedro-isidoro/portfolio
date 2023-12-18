import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './form.css'

const handleForm = (data) => {
    console.log(data);

    if(data.name === '' || data.email === '' || data.telephone === '' || data.instagram === '' || data.opnion === ''){
        return;
    };
    // Pegando as informações para colocar no templateEmail
    const templateParams = {
        name: data.name,
        email: data.email,
        telephone: data.telephone,
        instagram: data.instagram,
        message: data.opnion,
    };

    const backgroundForm = document.getElementById("background-form");
    // Para enviar as informações do Form por Email
    emailjs.send("service_znurchl", "template_xifqdpl", templateParams, "eQp_3RbaJKsV8kOFU")
    .then((response) => {
        backgroundForm.classList.toggle('formSend');
        console.log("Email Enviado", response.status, response.text);
        backgroundForm.scrollIntoView();
    }, (err) => {
        console.log("Erro:", err);
    });
}

function Formulary(){
    // Aqui criamos uma forma de useState com o react hook form
    const {
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm({
        // Para messages de erro
        defaultValues: {
            name: "",
            email: "",
            telephone: "",
            opnion: ""
        }
    });
    // console.log(errors);

    return(
            <div className="background-form" id="background-form">
                <div className="title-form flex-column">
                    <h3>Quer me mandar uma solicitação?</h3>
                    <p>Preencha esse formulário, que receberei por email</p>
                </div>
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className="formulary">
                        <div className="item-formulary flex-column" id='userName'>
                            <label htmlFor="name">Nome <span>*</span></label>
                            <input type="text" name="nome" id="name" placeholder="Digite o nome" autoComplete="on" 
                            {...register("name",
                                // Para o Regex e definição de mensagem de erro 
                                {required: 'Este campo é Obrigatório*',
                                pattern: {
                                    value: /^[A-Za-z\s]+$/, 
                                    message: 'Apenas Letras são válidas!'} 
                                })
                            }/>
                            {/* Aqui irá mostrar a mensagem de erro */}
                            <p className='aviso'>{errors.name?.message}</p>
                        </div>

                        <div className="item-formulary flex-column" id='userEmail'>
                            <label htmlFor="email">Email<span>*</span></label>
                            <input type="email" name="e-mail" id="email" placeholder="Ex: contato@gmail.com" autoComplete="on" 
                            {...register("email", 
                                {required: 'Este campo é Obrigatório*',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 
                                    message: 'Apenas Emails válidos. Ex: your.Name@gmail.com!'} 
                                })
                            }/>
                            <p className='aviso'>{errors.email?.message}</p>
                        </div>

                        <div className="item-formulary flex-column" id='userTelephone'>
                            <label htmlFor="telephone">Telefone<span>*</span></label>
                            <input type="tel" name="telephone-number" id="telephone" placeholder="Ex: +55-9xxxx-xxxx" autoComplete="on" 
                            {...register("telephone", 
                                {required: 'Este campo é Obrigatório*',
                                pattern: {
                                    value: /^\+\d{1,3}-\d{3,14}$/, 
                                    message: 'Insira um número válido. Ex: +11-970601261!'}
                                })
                            }/>
                            <p className='aviso'>{errors.telephone?.message}</p>
                        </div>

                        <div className="item-formulary flex-column" id='userInstagram'>
                            <label htmlFor="instagram">Instagram</label>
                            <input type="text" name="instagram-name" id="instagram" placeholder="Digite o instagram" autoComplete="off" {...register("instagram")}/>
                        </div>

                        <div className="item-formulary flex-column" id='userOpnion'>
                            <label htmlFor="opnion">Qual o motivo do contato?<span>*</span></label>
                            <textarea name="opnion" id="opnion" placeholder="Me fale sobre" autoComplete="on" {...register("opnion", {required: 'Este campo é Obrigatório*'})}/>
                            <p className='aviso'>{errors.opnion?.message}</p>
                        </div>
                    </div>
                    <div className="register">
                        <button id="btn-send" type="submit">Cadastrar</button>
                    </div>
                </form>
                <div className="flex-column" id="div-form-send">
                    <h3>Formulário Enviado</h3>
                    <p>Assim que possível, entrarei em contato!!</p>
                </div>
            </div>
    );
};

export default Formulary