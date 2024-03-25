import CallButton from "../../common-components/call-button"
import ByteOrangeLogo from '../../assets/section-one/byte-orange-logo.png';
import './section-one.css';

export default function SectionOne() {

    return(

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
    )
}