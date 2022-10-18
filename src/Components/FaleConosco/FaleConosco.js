import './FaleConosco.css'
import { motion } from 'framer-motion'

function FaleConosco() {
    return (
        <div className='faleConosco'>
            <div className='faleConosco-box'>
                <div className='faleConosco-box-texto'>
                    <h1 id='contato'>Fale com um de nossos especialistas</h1>
                    <p>Preencha os campos abaixo e aguarde que em breve entraremos em contato com você.</p>
                    <form action="https://paginas.rocks/capture" method="post" >
                        <input id="id" name="id" type="hidden" value="663494" />
                        <input id="mid" name="mid" type="hidden" value="663494" />
                        <input id="pid" name="pid" type="hidden" value="21193154" />
                        <input id="list_id" name="list_id" type="hidden" value="663494" />
                        <input id="provider" name="provider" type="hidden" value="leadlovers" />

                        <input className="form-control form-ll" id="name" name="name" placeholder="Informe o seu nome" type="text" />

                        <input className="form-control form-ll" id="email" name="email" placeholder="Informe o seu email" type="text" />

                        <input className="form-control form-ll" id="phone" name="phone" placeholder="Informe o telefone" type="text" />
                        <div className="checkbox-list" data-required="true">
                            <div className="checkbox-list">
                                <label>
                                    <input id="LGPDValidation" name="LGPDValidation" type="checkbox" value="1" />&nbsp;Autorizo o recebimento de contato via celular ou e-mail para, exclusivamente, obter informações sobre os serviços prestados pela Letter Consulting.
                                </label>
                            </div>
                        </div>
                        <button className="botao" type="submit">Enviar!</button>
                    </form>
                </div>
            </div>
            <motion.img
                initial={{ x: 800 }}
                transition={{ duration: 0.7 }}
                animate={{ x: 0 }}
                src='./1 1.png' />
        </div>
    )
}

export default FaleConosco
