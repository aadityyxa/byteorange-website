import { useState } from "react"
import './section-seven.css'
import PlanCard from "./plan-card/plan-card";

export default function SectionSeven() {

    const [toggleTab, setToggleTab] = useState(1);
    
    function onToggleTab(index) {

        setToggleTab(index); 
    }
 

    return(
        <div className="section-seven">
            <div className="heading-section">
                <h2 className="section-seven-heading">Find a plan that fits your business best.</h2>
            </div>

            <div className="plan-tabs">
                <div className={toggleTab === 1 ? "plan-tab active-plan-tab active" : "plan-tab"} onClick={() => onToggleTab(1)}>
                    Monthly
                </div>

                <div className={toggleTab === 2 ? "plan-tab active-plan-tab active" : "plan-tab"}  onClick={() => onToggleTab(2)}>
                    Annual
                </div>
            </div>

            <div className={toggleTab === 1 ? "plan-grid active-plan-grid" : "plan-grid"}>
                <PlanCard />
                
                <PlanCard type='pro'/>

                <PlanCard />
                
            </div>

            <div className={toggleTab === 2 ? "plan-grid active-plan-grid" : "plan-grid"}>

            </div>

        </div>
    )
}