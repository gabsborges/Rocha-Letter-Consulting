import './Servicos.css'
import ServicosCards from './ServicosCards/ServicosCards'

function Servicos() {
    return (
        <div className='servicos'>
            <div className='servicos-texto'>
                <h1 id='servicos'>Serviços</h1>
                <p>Na Letter Consulting, inspiramos confiança e empoderamos a mudança em tudo o que fazemos por nossos clientes, por nossas pessoas e pelas comunidades a que servimos.</p>
                <p>Nossa visão compartilhada é nos tornarmos a escolha certa nos serviços que oferecemos, que são eles:</p>
            </div>
            <ServicosCards/>
        </div>
    )
}

export default Servicos