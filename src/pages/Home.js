import React from 'react';
import Confia from '../Components/Confia/Confia';
import Diferenciais from '../Components/Diferenciais/Diferenciais';
import FaleConosco from '../Components/FaleConosco/FaleConosco';
import Footer from '../Components/Footer/Footer';
import MainSection from '../Components/MainSection/MainSection';
import Servicos from '../Components/Servicos/Servicos';
import SobreALetter from '../Components/SobreALetter/SobreALetter';
import Header from '../Components/Header/Header';


function Home() {
 
    return (
        <div className="home">
      <div className='main-section'>
        <Header/>
      <MainSection/>
      </div>
      <SobreALetter/>
      <Diferenciais/>
      <div className='confia-section'>
      <Confia/>
      </div>
      <Servicos/>
      <FaleConosco/>
      <div className='footer-section'>
        <Footer/>
      </div>
     
        </div>
    )
}

export default Home