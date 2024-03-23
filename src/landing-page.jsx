import CallButton from "./common-components/call-button"
import ByteOrangeLogo from './assets/byteorange-logo.png';
import './landing-page.css';


// import carouselBorder from './assets/section-two/__before.png';
import carouselLogo1 from './assets/section-two/ByteOrange _ Website (1)/Group - 9/10.png'
import carouselLogo2 from './assets/section-two/ByteOrange _ Website (2)/Group - 10/10.png'
import carouselLogo3 from './assets/section-two/ByteOrange _ Website (3)/Group - 1/10.png'
import carouselLogo5 from './assets/section-two/ByteOrange _ Website (5)/Group - 2/10.png'
import carouselLogo6 from './assets/section-two/ByteOrange _ Website (6)/Group - 3/10.png'
import carouselLogo7 from './assets/section-two/ByteOrange _ Website (7)/Group - 4/10.png'
import carouselLogo8 from './assets/section-two/ByteOrange _ Website (8)/Group - 5/10.png'
import carouselLogo4 from './assets/section-two/ByteOrange _ Website/Group - 8/10.png'

import leftWireframe from './assets/section-three/left wireframe.png';
import RightWireframe from './assets/section-three/right wireframe.png';
import videoRectangle from './assets/section-three/Rectangle 3.png';
import playerArrow from './assets/section-three/player arrow.png';




export default function LandingPage() {


    return (
        <>
            <div className="section-1">

                <div className="navbar">
                    <div className="logo">
                        <img src={ByteOrangeLogo} alt="" />
                    </div>

                    <div className="navbar-right-side">
                        <div className="navbar-sign-in">Sign In</div>
                        <CallButton />
                    </div>

                </div>  

                <div className="hero-section">
                    <h1>Hire reliable and trustworthy talents.</h1>
                    <span>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</span>
                    <CallButton />
                </div>
            </div>

            <div className="section-2">
                <h3 className="section-2-heading">Trusted by leading brands, including:</h3>

                <div className="carousel">
                    {/* <img src={carouselBorder} alt="" id="carousel-left-border"/> */}
                    <img src={carouselLogo1} alt="" />
                    <img src={carouselLogo2} alt="" />
                    <img src={carouselLogo3} alt="" />
                    <img src={carouselLogo4} alt="" />
                    <img src={carouselLogo5} alt="" />
                    <img src={carouselLogo6} alt="" />
                    <img src={carouselLogo7} alt="" />
                    <img src={carouselLogo8} alt="" />
                    {/* <img src={carouselBorder} alt="" id="carousel-right-border"/> */}

                </div>
            </div>

            <div className="section-3">
                <h2 className="section-3-heading">
                    We support early stage startups and leading tech giants.
                </h2>

                    <img src={leftWireframe} alt="" id="left-wf"/>
                    <img src={RightWireframe} alt="" id="right-wf"/>

                <div className="video-player">

                    <img src={videoRectangle} alt="" />
                    <button className="player-button">
                        <img src={playerArrow} alt="" />
                        Quick Explainer
                    </button>
                </div>

                <div className="flow-chart">
                    
                </div>


            </div>
        </>
    )
}
