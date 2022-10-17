import './FaleConosco.css'
import { motion } from 'framer-motion'

function FaleConosco() {
    return (
        <div className='faleConosco'>
            <div className='faleConosco-box'>
                <div className='faleConosco-box-texto'>
                    <h1 id='contato'>Fale com um de nossos especialistas</h1>
                    <p>Preencha os campos abaixo e aguarde que em breve entraremos em contato com você.</p>
                    <form id="llCaptureForm" className="faleConosco-form-area" action="//paginas.rocks/capture" method="post">
                        <input type="hidden" id="mid" name="mid" value="666007" />
                        <input type="hidden" id="fid" name="fid" value="54484" />
                        <input type="hidden" id="formType" name="formType" value="dynamic" />
                        <div className='faleConosco-form-area'>
                            <input type="text" id="llfield69862" name="llfield69862" placeholder="Digite seu nome" data-required="true" />
                            <div className="field-error" id="llerror69862"></div>
                        </div>
                        <div className='faleConosco-form-area'>
                            <input type="email" id="llfield69863" name="llfield69863" placeholder="Digite seu e-mail" data-required="true" />
                            <div className="field-error" id="llerror69863"></div>
                        </div>
                        <div className='faleConosco-form-area'>
                            <input type="tel" id="llfield69864" name="llfield69864" placeholder="Digite DDD + Seu Número" data-required="true" />
                            <div className="field-error" id="llerror69864"></div>
                        </div>
                        <div>
                            <div className="field-error" id="LGPDValidation"></div>
                            <div className="checkbox-list" data-required="true" >
                                <div className="faleConosco-form-area-checkbox checkbox">
                                    <label>
                                        <input type="checkbox" id="LGPDValidation" name="LGPDValidation" value="1" /> Autorizo o recebimento de contato via celular ou e-mail para, exclusivamente, obter informações sobre os serviços prestados pela Letter Consulting.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="faleConosco-form-area-submit button-bar">
                            <button type="submit">Enviar!</button>
                        </div>
                        <div className="loading-box">
                            <img src="//paginas.rocks/content/images/spinner.gif" />
                            <div>loading...</div>
                        </div>
                        <div className="error-box">
                            <img src="//paginas.rocks/content/images/error-icon.png" />
                            <div></div>
                            <button type="button" className="btn" id="btn-error">Ok</button>
                        </div>
                        <img className='img-final' src="https://llimages.com/redirect/redirect.aspx?A=V&f=54484&m=666007" />
                    </form>
                </div>
                <motion.img
                    initial={{ x: 800 }}
                    transition={{ duration: 0.7 }}
                    animate={{ x: 0 }}
                    src='./1 1.png' />
            </div>
        </div>
    )
}

export default FaleConosco