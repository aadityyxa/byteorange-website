import './call-button.css';
import ScheduleCallArrow from '../assets/schedule-call-arrow.png'; 

export default function CallButton() {


    return(
        <button className="schedule-a-call">
            Schedule A Call
            <img src={ScheduleCallArrow} alt="" />
        </button>
    )
}