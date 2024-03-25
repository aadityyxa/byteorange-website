import leftWireframe from '../../assets/section-three/left-wireframe.png';
import RightWireframe from '../../assets/section-three/right-wireframe.png';
import videoRectangle from '../../assets/section-three/player-rectangle.png';
import playerArrow from '../../assets/section-three/player-button.png';

import './section-three.css';
import CallButton from '../../common-components/call-button';


export default function SectionThree() {

    return(
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

                <div className="fc-line"></div>

                    <div className="fc-section">
                        <div className="circle">
                            1
                        </div>

                        <h4>Personalized Outreach</h4>
                        <span>Work is changing faster than at any other time in history. </span>
                    </div>

                    <div className="fc-section">
                        <div className="circle">
                            2
                        </div>

                        <h4>Personalized Outreach</h4>
                        <span>Work is changing faster than at any other time in history. </span>
                    </div>

                    <div className="fc-section">
                        <div className="circle">
                            3
                        </div>

                        <h4>Personalized Outreach</h4>
                        <span>Work is changing faster than at any other time in history. </span>
                    </div>

                    <div className="fc-section">
                        <div className="circle">
                            4
                        </div>

                        <h4>Personalized Outreach</h4>
                        <span>Work is changing faster than at any other time in history. </span>
                    </div>

                </div>

                <CallButton />


            </div>

    )
}