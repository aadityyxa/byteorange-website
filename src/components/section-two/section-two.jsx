import carouselLogo1 from '../../assets/section-two/ByteOrange_Website(1)/Group-9/10.png'
import carouselLogo2 from '../../assets/section-two/ByteOrange_Website(2)/Group-10/10.png'
import carouselLogo3 from '../../assets/section-two/ByteOrange_Website(3)/Group-1/10.png'
import carouselLogo5 from '../../assets/section-two/ByteOrange_Website(4)/Group-2/10.png'
import carouselLogo6 from '../../assets/section-two/ByteOrange_Website(5)/Group-3/10.png'
import carouselLogo7 from '../../assets/section-two/ByteOrange_Website(6)/Group-4/10.png'
import carouselLogo8 from '../../assets/section-two/ByteOrange_Website(7)/Group-5/10.png'
import carouselLogo4 from '../../assets/section-two/ByteOrange_Website/Group-8/10.png'
import carouselLogo9 from '../../assets/section-two/ByteOrange_Website(8)/Group-6/10.png'

import './section-two.css';

export default function SectionTwo() {

    return(
            <div className="section-2">
                <h3 className="section-2-heading">Trusted by leading brands, including:</h3>

                <div className="carousel">
                    <img src={carouselLogo1} alt="" />
                    <img src={carouselLogo2} alt="" />
                    <img src={carouselLogo3} alt="" />
                    <img src={carouselLogo4} alt="" />
                    <img src={carouselLogo5} alt="" />
                    <img src={carouselLogo6} alt="" />
                    <img src={carouselLogo7} alt="" />
                    <img src={carouselLogo8} alt="" />
                    <img src={carouselLogo9} alt="" />

                </div>
            </div>
    )
}