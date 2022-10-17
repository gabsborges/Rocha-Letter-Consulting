import './FooterThanksYou.css'

function TYFooter() {
    return (
        <div className='TYfooter'>
            <div className='TYfooter-menu'>
                <a href='#'>
                    <img id='home' src='./logo-amarelo.png' /></a>
                <div className='TYfooter-menu-menu'>
                    <ul>
                        <li><a href='#sobre'>Sobre</a></li>
                        <li><a href='#diferenciais'>Diferenciais</a></li>
                        <li><a href='#servicos'>Serviços</a></li>
                    </ul>
                </div>
                <div className="TYfooter-icons">
                    <a href="" target="blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="" target="blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="" target="blank"><i class="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
            <div className='TYfooter-menu2'>
                <div className='TYfooter-dados-contatos'>
                        <a href="https://api.whatsapp.com/send?phone=5545988221644"><i class="fa-solid fa-phone"></i>+55 (45) 98822.1644</a>
                        <p><i class="fa-solid fa-envelope"></i>celiton.junior@letterconsulting.com.br</p>
                    </div>
                    <img src='./alloy.png'/>
            </div>
            <div className='copyright'>
                <p>© copyright 2022  - Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default TYFooter