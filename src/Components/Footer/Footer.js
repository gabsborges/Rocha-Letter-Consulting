import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-menu'>
                <a href='#'>
                    <img id='home' src='./logo-amarelo.png' /></a>
                <div className='footer-menu-menu'>
                    <ul>
                        <li><a href='#sobre'>Sobre</a></li>
                        <li><a href='#diferenciais'>Diferenciais</a></li>
                        <li><a href='#servicos'>Serviços</a></li>
                    </ul>
                </div>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/company/rocha-letter-consulting/" target="blank" alt="Linkedin"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/rocha.letterconsulting/" target="blank" alt="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/people/Rocha-Letter-Consulting/100084822468759/" target="blank" alt="Facebook"><i className="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
            <div className='footer-menu2'>
                <div className='footer-dados-contatos'>
                        <a href="https://api.whatsapp.com/send?phone=5545991445454" alt="Whatsapp"><i className="fa-solid fa-phone"></i>+55 (45) 99144.5454</a>
                        <p><i className="fa-solid fa-envelope"></i>celiton.junior@letterconsulting.com.br</p>
                    </div>
                    <img src='./alloy.png' alt="Letter Consulting" title="Letter Consulting"/>
            </div>
            <div className='copyright'>
                <p>© copyright 2022  - Todos os direitos reservados.</p>
            </div>       
        </div>
    )
}

export default Footer