import infographLogo1 from '../../assets/section-four/infographic-icon-1.png';
import infographLogo2 from '../../assets/section-four/infographic-icon-2.png'; 
import infographLogo3 from '../../assets/section-four/infographic-icon-3.png'; 
import infographLogo4 from '../../assets/section-four/infographic-icon-4.png'; 

import Slider from '../../common-components/slider';
import './section-four.css'

export default function SectionFour(){

    return(
        <div className="section-four">
                <h2>We bring you high-quality talents from 72+ countries.</h2>

                <div className="slider-container">
                    <Slider />
                </div>


                <div className="section-four-infographs">

                    <div className="infograph">
                        <img src={infographLogo1} alt="" />
                        <h4 className="infograph-title">Reward Performers</h4>
                        <span>
                            No more endless tasks or wasted budgets. With us, you and your team are taken care of. 
                        </span>

                    </div>

                    <div className="infograph">
                        <img src={infographLogo2} alt="" />
                        <h4 className="infograph-title">Reward Performers</h4>
                        <span>
                            No more endless tasks or wasted budgets. With us, you and your team are taken care of. 
                        </span>

                    </div>

                    <div className="infograph">
                        <img src={infographLogo3} alt="" />
                        <h4 className="infograph-title">Reward Performers</h4>
                        <span>
                            No more endless tasks or wasted budgets. With us, you and your team are taken care of. 
                        </span>

                    </div>

                    <div className="infograph">
                        <img src={infographLogo4} alt="" />
                        <h4 className="infograph-title">Reward Performers</h4>
                        <span>
                            No more endless tasks or wasted budgets. With us, you and your team are taken care of. 
                        </span>

                    </div>
                </div>
        
            </div>
    )
}