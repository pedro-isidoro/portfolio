import React from "react";
import { Link } from 'react-router-dom';
import './css/errorPage.css'

const ErrorPage = () => {
    return(
        <section className="error-message flex-column">
            <div className="error flex-column">
                <div className="error-text flex-column">
                    <h1>Erro 404!!</h1>
                    <p>Erro desconhecido, por favor aguarde!!</p>
                </div>
                <button>
                    <Link className='link-back' to="/">Voltar para a Bio</Link>
                </button>
            </div>
        </section>
    );
};

export default ErrorPage