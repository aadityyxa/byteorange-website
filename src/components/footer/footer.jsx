import CallButton from "../../common-components/call-button"
import './footer.css';
import orangeBlob from '../../assets/footer/footer-orange-blob.png';
import githubLogo from '../../assets/footer/github-logo.png';
import twitterLogo from '../../assets/footer/twitter-logo.png';
import telegramLogo from '../../assets/footer/telegram-logo.png'

export default function Footer() {

    return(

        <div className="footer">

            <img src={orangeBlob} alt="" className="bg-orange-blob"/>
            <div className="footer-heading-section">
                <h2 className="footer-heading">Start hiring reliable and trustworthy talents today</h2>

                <CallButton />
            </div>

            <div className="footer-lists">
                <div className="footer-list">
                    <div className="footer-list-title">ESSENTIALS</div>
                    <div className="footer-list-item">Payments</div>
                    <div className="footer-list-item">Diversity/Inclusion</div>
                    <div className="footer-list-item">Product Method</div>
                    <div className="footer-list-item">Terms of Service</div>
                    <div className="footer-list-item">Customers</div>
                </div>

                <div className="footer-list">
                    <div className="footer-list-title">ESSENTIALS</div>
                    <div className="footer-list-item">Payments</div>
                    <div className="footer-list-item">Diversity/Inclusion</div>
                    <div className="footer-list-item">Product Method</div>
                    <div className="footer-list-item">Terms of Service</div>
                    <div className="footer-list-item">Customers</div>
                </div>

                <div className="footer-list">
                    <div className="footer-list-title">ESSENTIALS</div>
                    <div className="footer-list-item">Payments</div>
                    <div className="footer-list-item">Diversity/Inclusion</div>
                    <div className="footer-list-item">Product Method</div>
                    <div className="footer-list-item">Terms of Service</div>
                    <div className="footer-list-item">Customers</div>
                </div>

                <div className="footer-list">
                    <div className="footer-list-title">ESSENTIALS</div>
                    <div className="footer-list-item">Payments</div>
                    <div className="footer-list-item">Diversity/Inclusion</div>
                    <div className="footer-list-item">Product Method</div>
                    <div className="footer-list-item">Terms of Service</div>
                    <div className="footer-list-item">Customers</div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright-text">
                    © Byteorange.com. All rights reserved.
                </div>

                <div className="social-logos">
                    <img src={githubLogo} alt="" className="social"/>
                    <img src={twitterLogo} alt="" className="social"/>
                    <img src={telegramLogo} alt="" className="social"/>
                </div>

                
            </div>
            
        </div>
    )
}