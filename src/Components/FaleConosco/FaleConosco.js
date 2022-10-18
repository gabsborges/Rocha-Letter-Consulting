import './FaleConosco.css'
import { motion } from 'framer-motion'

function FaleConosco() {
    return (
        <div className='faleConosco'>
            <div className='faleConosco-box'>
                <div className='faleConosco-box-texto'>
                    <h1 id='contato'>Fale com um de nossos especialistas</h1>
                    <p>Preencha os campos abaixo e aguarde que em breve entraremos em contato com você.</p>
                    <form id="llCaptureForm" className="llform001" action="//paginas.rocks/capture" method="post">
                        <input type="hidden" id="mid" name="mid" value="666007" />
                        <input type="hidden" id="fid" name="fid" value="54484" />
                        <input type="hidden" id="formType" name="formType" value="dynamic" />
                        <div>
                            <input className="form-control form-ll" type="text" id="llfield69862" name="llfield69862" placeholder="Digite seu nome" data-required="true" />
                            <div className="field-error" id="llerror69862"></div>
                        </div>
                        <div>

                            <input className="form-control form-ll" type="email" id="llfield69863" name="llfield69863" placeholder="Digite seu e-mail" data-required="true" />
                            <div className="field-error" id="llerror69863"></div>
                        </div>
                        <div>

                            <input className="form-control form-ll" type="tel" id="llfield69864" name="llfield69864" placeholder="Digite DDD + Seu Número" data-required="true" />
                            <div className="field-error" id="llerror69864"></div>
                        </div>
                        <div>
                            <div className="field-error" id="LGPDValidation"></div>
                            <div className="checkbox-list" data-required="true" >
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" id="LGPDValidation" name="LGPDValidation" value="1" /> Autorizo o recebimento de contato via celular ou e-mail para, exclusivamente, obter informações sobre os serviços prestados pela Letter Consulting.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='faleConosco-form-area-submit'>
                            <button className="btn" type="submit">Enviar</button>
                        </div>
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
