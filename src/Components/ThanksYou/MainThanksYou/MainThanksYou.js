import './MainThanksYou.css'
import { Outlet, Link } from "react-router-dom";

function TYMainSection() {
    return (
        <div className='TYmainSection'>
            <h1>Obrigado! Sua mensagem foi recebida com sucesso.</h1>
            <p>Em breve um de nossos especialistas entrará em contato com você.</p>
            <div className='botao-contato'>
            <Link className='botao-contato' to="/">Voltar para o site</Link>
            </div>
        </div>
    )
}

export default TYMainSection