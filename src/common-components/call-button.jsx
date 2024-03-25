import './call-button.css';
import ScheduleCallArrow from '../assets/section-one/call-button-arrow.png'; 

export default function CallButton() {


    return(
        <button className="schedule-a-call">
            Schedule A Call
            <img src={ScheduleCallArrow} alt="" />
        </button>
    )
}