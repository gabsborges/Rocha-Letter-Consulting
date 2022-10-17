import React from "react"
import TYFooter from "../Components/ThanksYou/FooterThanksYou/FooterThanksYou"
import TYHeader from "../Components/ThanksYou/HeaderThanksYou/HeaderThanksYou"
import TYMainSection from "../Components/ThanksYou/MainThanksYou/MainThanksYou"


function ThanksYouPage() {
    return (
        <div className="thanksYouPage">
            <TYHeader/>
            <TYMainSection/>
            <div className='footer-section'>
            <TYFooter/>
            </div>
        </div>
    )
}

export default ThanksYouPage