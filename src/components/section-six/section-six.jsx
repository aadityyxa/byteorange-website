import gridImage from '../../assets/section-six/section-six-image.png';
import buttonArrow from '../../assets/section-six/services-button-arrow.png';
import './section-six.css';

export default function SectionSix() {


    return(
        <div className="section-six">

            <div className="heading-section">
                <h2 className="section-six-heading">
                    Scale your business with ready-to-buy services
                </h2>
            </div>

            <div className="section-six-grid">
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">System Design</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Remote Team</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Illustration</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Articles and Posts</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Wireframing</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Website Content</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Copywriting</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Virtual Assistant</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Video Editing</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Web Development</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Signage</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Web APIs</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">E-Commerce</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Data Entry</div>
                </div>
                <div className="grid-item">
                    <img src={gridImage} alt="" />
                    <div className="grid-item-desc">Voice Recording</div>
                </div>


            </div>

                <button className="services-button">
                    See All Services
                    <img src={buttonArrow} alt="" />
                </button>
        </div>
    )
}