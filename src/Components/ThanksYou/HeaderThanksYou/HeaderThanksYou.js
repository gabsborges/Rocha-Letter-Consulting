import './HeaderThanksYou.css'
import React from 'react'

function TYHeader() {
    return (
      <div className='TYheader'>
        <div className='TYheader-area'>
          <img src='./logo.png'/>
            <div className='TYheader-contato'>
              <a href='https://api.whatsapp.com/send?phone=5545991445454'><img src='./contato.png'/>Contato</a>
            </div>
        </div>
      </div>
    )
}

export default TYHeader





