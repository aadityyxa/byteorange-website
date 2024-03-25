import { useState } from 'react';
import listCheckMark from '../../assets/section-five/check-mark.png'
import './section-five.css'

export default function SectionFive() {

    const [toggleTab, setToggleTab] = useState(1); 

    function onToggleTab(index) {
        setToggleTab(index); 
    }


    return(
            <div className="section-five">
                    <h2 className="section-five-heading">Everything you need to find, hire, and manage talents.</h2>

                    <div className="tabs">
                        <div className={toggleTab === 1 ? "tab active-tab active": "tab"} onClick={() => onToggleTab(1)}>Flexible Features</div>
                        <div className={toggleTab === 2 ? "tab active-tab active": "tab"} onClick={() => onToggleTab(2)}>Flexible Features</div>
                        <div className={toggleTab === 3 ? "tab active-tab active": "tab"} onClick={() => onToggleTab(3)}>Flexible Features</div>
                        <div className={toggleTab === 4 ? "tab active-tab active": "tab"} onClick={() => onToggleTab(4)}>Flexible Features</div>
                    </div>


                    <div className={toggleTab === 1 ? "tab-content active-tab-content": "tab-content"}>
                        <h3 className="tab-heading">The member-owned tech society.</h3>
                        <span className="tab-desc">Work is changing faster than at any other time in history. This rapid change requires anew hiring model. A model that is fair, inclusive and empowering. That’s why we built this.
                        </span>

                        <div className="tab-feature-list">

                            <div className="tab-list-item">
                                <img src={listCheckMark} alt="" />

                                <div className="feature-text">
                                    <h5>Ensure Quick Turnarounds</h5>

                                    <span>Work is changing faster than at any othertime in history. This rapid change requires anew hiring model.</span>
                                </div>

                            </div>

                            <div className="tab-list-item">
                                <img src={listCheckMark} alt="" />

                                <div className="feature-text">
                                    <h5>Ensure Quick Turnarounds</h5>

                                    <span>Work is changing faster than at any othertime in history. This rapid change requires anew hiring model.</span>
                                </div>

                            </div>

                            <div className="tab-list-item">
                                <img src={listCheckMark} alt="" />

                                <div className="feature-text">
                                    <h5>Ensure Quick Turnarounds</h5>

                                    <span>Work is changing faster than at any othertime in history. This rapid change requires anew hiring model.</span>
                                </div>

                            </div>
                        

                        </div>

                    </div>

                    <div className={toggleTab === 2 ? "tab-content active-tab-content": "tab-content"}>

                    </div>

                    <div className={toggleTab === 3 ? "tab-content active-tab-content": "tab-content"}>

                    </div>

                    <div className={toggleTab === 4 ? "tab-content active-tab-content": "tab-content"}>

                    </div>

            </div>


    )
}