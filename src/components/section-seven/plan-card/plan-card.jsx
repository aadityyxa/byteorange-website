import CallButton from '../../../common-components/call-button.jsx';
import checkMark from '../../../assets/section-five/check-mark.png';
import './plan-card.css'

export default function PlanCard() {

    return(
        <div className="plan-card">
            <div className="plan-title">Basic</div>
            <div className="plan-price"><span>$</span><span>499</span>/mo</div>

            <span className='plan-desc'>Start building your team and hire the most talented workers in the world.</span>

            <CallButton />

            <div className="features">
                <span>Features include:</span>

                <div className="feature-list">
                    <div className="plan-feature-list-item">
                        <img src={checkMark} alt="" />
                        <span>Unlimited placeholder texts</span>
                    </div>
                    <div className="plan-feature-list-item">
                        <img src={checkMark} alt="" />
                        <span>Lorem, ipsum dolor.</span>
                    </div>
                    <div className="plan-feature-list-item">
                        <img src={checkMark} alt="" />
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="plan-feature-list-item">
                        <img src={checkMark} alt="" />
                        <span>Lorem ipsum dolor sit amet consectetur.</span>
                    </div>
                </div>
            </div>
                    
        </div>
    )
}