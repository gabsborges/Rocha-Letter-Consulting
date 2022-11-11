import './SobreALetter.css'

function SobreALetter() {
    return (
        <div className='sobreALetter'>
            <div className='sobreALetter-area'>
                <div className='sobreALetter-box'>
                    <h1 id='sobre'>Sobre a<br />Letter Consulting</h1>
                    <p>Na Letter Consulting , inspiramos confiança e empoderamos a mudança em tudo o que fazemos por nossos clientes, por nossas pessoas e pelas comunidades a que servimos.</p>
                    <p>Ao longo dos anos, a Letter Consulting acumula um histórico de sucesso em trabalhos jurídicos com enfoque estritamente tributário. Fundamentado neste conhecimento, nossos profissionais estão amplamente capacitados para identificar pontos de economia ou oportunidades tributárias/fiscais e implementar a estratégia com excelência.</p>
                    <p>Reconhecida pela eficiência e dinamismo das mais variadas questões tributárias, a Letter Consulting atua em todas as áreas do direito tributário, desde a revisão tributária e previdenciária, como também em impostos diretos e indiretos, compliance fiscal, NJP, Transação, contencioso adm/tributário, LGPD, compliance de contratos e planejamento tributário e sucessório.</p>
                    <p>Nossa estrutura é ágil, o que nos confere uma rápida capacidade de resposta e permite um elevado grau de adaptação às necessidades dos nossos clientes,
                        colocando à disposição destes à elaboração e entrega de soluções Taylor-made. Assim, conseguimos alocar os melhores recursos para cuidar das demandas específicas dos clientes, trabalhando sempre que necessário em grupos multidisciplinares potencializando nossa capacidade de entendimento do seu negócio e nos tornando um parceiro relevante. </p>
                </div>
                <div className='sobreALetter-infos'>
                    <img src='/rino-martelo1.png' />
                    <ul>
                        <li><strong>+R$ 8,4 bilhões</strong><br />de créditos tributários recuperados</li>
                        <li><strong>+ 5 mil</strong><br />clientes atendidos</li>
                        <li><strong>+ 200</strong><br />colaboradores capacitados</li>
                    </ul>
                </div>
            </div>
            <a href='#contato'>Saber mais</a>
        </div>
    )
}

export default SobreALetter