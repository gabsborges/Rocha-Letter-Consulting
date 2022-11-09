import React from 'react';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';

function CarouselSlider() {
    return (
        <div className='carouselSlider' style={{ display: 'block', padding: 0 }}>
            <Carousel 
            fade
            nextIcon = { <span className='nextPrevIcon'><img src='./next.png'/></span>}
            prevIcon = { <span className='nextPrevIcon'><img src='./prev.png'/></span>}
            >
                <Carousel.Item interval={5500}>
                <div className='carouselSlider-box box'>
                    <div className='carouselSlider-titulo'>
                        <h1>Soluções Tributárias para o Agronegócio ao seu alcance!</h1>
                    </div>
                    <div className='carouselSlider-paragrafo'>
                        <p>Trabalhamos para assegurar a melhora de performance e a mitigação de riscos.</p>
                    </div>
                    <div className='carouselSlider-botoes'>
                        <a href='#' className='botao'>Saber mais</a>
                        <a href='https://api.whatsapp.com/send?phone=5545988221644' className='falarWhatts'>Falar pelo WhatsApp</a>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item interval={5500}>
                    <div className='carouselSlider-box box1'>
                        <div className='carouselSlider-titulo'>
                            <h1>As melhores práticas tributárias para o seu escritório alavancar seus rendimentos!</h1>
                        </div>
                        <div className='carouselSlider-paragrafo'>
                            <p>Soluções inteligentes para apoiar a sua empresa na viabilização de de oportunidades na área fiscal.</p>
                        </div>
                        <div className='carouselSlider-botoes'>
                            <a href='#' className='botao'>Saber mais</a>
                            <a href='https://api.whatsapp.com/send?phone=5545988221644' className='falarWhatts'>Falar pelo WhatsApp</a>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselSlider;