import React from 'react'
import Selfie from '../Assets/HawaiianSelfie.jpg'

const AboutSection = () => {

    return (

        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>I work to make </h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come  </h2>
                    </div>
                    <div className="hide">
                        <h2>true. </h2>
                    </div>
                </div>
                <p>Contact us for any ideas</p>
                <button>Conact me</button>
            </div>
            <div className="image">
                <img src={Selfie} alt="Pictue of Jasper in a Hawaiian shirt" />
            </div>
        </div>

    )
}

export default AboutSection;