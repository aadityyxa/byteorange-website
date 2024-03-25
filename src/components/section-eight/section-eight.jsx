import grayCircle from '../../assets/section-eight/section-eight-gray-circle.png';
import './section-eight.css'

export default function SectionEight() {


    return(
        <div className="section-eight">

            <div className="quote-section">

                <img src={grayCircle} alt="" />

                <div className='quote'>“The service helped me find the perfect match. Two clear benefits I gained are a good assessment of my needs and a pool of reliable potential talents.”</div>

                <span className="customer-name">
                    Patrick Millis - CEO, <span>Praxynet</span>
                </span>

            </div>



            <div className="faq-section">

                <h2 className="faq-heading">Frequently Asked Questions</h2>

                <div className="faqs">

                    <div className="faq-list-item">
                        <div className="question">How much is this going to cost?</div>

                        <div className="answer">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odio, iusto fuga excepturi fugiat ex error sunt unde quos quas ipsa dolor vel officiis cumque? Culpa ratione sint maiores deserunt.
                        </div>
                    </div>

                    <div className="faq-list-item">
                        <div className="question">How much is this going to cost?</div>

                        <div className="answer">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odio, iusto fuga excepturi fugiat ex error sunt unde quos quas ipsa dolor vel officiis cumque? Culpa ratione sint maiores deserunt.
                        </div>
                    </div>

                    <div className="faq-list-item">
                        <div className="question">How much is this going to cost?</div>

                        <div className="answer">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odio, iusto fuga excepturi fugiat ex error sunt unde quos quas ipsa dolor vel officiis cumque? Culpa ratione sint maiores deserunt.
                        </div>
                    </div>

                    <div className="faq-list-item">
                        <div className="question">How much is this going to cost?</div>

                        <div className="answer">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odio, iusto fuga excepturi fugiat ex error sunt unde quos quas ipsa dolor vel officiis cumque? Culpa ratione sint maiores deserunt.
                        </div>
                    </div>

                    <div className="faq-list-item">
                        <div className="question">How much is this going to cost?</div>

                        <div className="answer">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae odio, iusto fuga excepturi fugiat ex error sunt unde quos quas ipsa dolor vel officiis cumque? Culpa ratione sint maiores deserunt.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}