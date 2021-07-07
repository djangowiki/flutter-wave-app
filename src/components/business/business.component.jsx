import React from 'react'
import './business.styles.css'

// Assets
import partner1 from '../../res/img/alat logo.svg'
import partner2 from '../../res/img/barter logo.svg'
import partner3 from '../../res/img/booking.com logo.svg'
import partner4 from '../../res/img/fibre logo.svg'
import partner5 from '../../res/img/flywire logo.svg'
import partner6 from '../../res/img/fruits2go logo.svg'
import partner7 from '../../res/img/gigm logo.svg'
import partner8 from '../../res/img/hotels.ng logo.svg'
import partner9 from '../../res/img/hygeia logo.svg'
import partner10 from '../../res/img/jumia logo.svg'
import partner11 from '../../res/img/max.ng logo.svg'
import partner12 from '../../res/img/muster logo.svg'
import partner13 from '../../res/img/nairabox logo.svg'
import partner14 from '../../res/img/quidax logo.svg'
import partner15 from '../../res/img/uber logo.svg'
import partner16 from '../../res/img/wakanow logo.svg'
import partner17 from '../../res/img/whogohost logo.svg'

const Business = () => {

    return (
        <div className='business'>
            <div className='business-wrapper'>
            <div className='business-carousel'>
            <ul className='carousel-list'>
                <div className='carousel-wrapper'>
                <li className='carousel-item'><img src={partner10}/></li>
                <li className='carousel-item'><img src={partner2}/></li>
                <li className='carousel-item'><img src={partner3}/></li>
                </div>
                <div className='carousel-wrapper'>
                <li className='carousel-item'><img src={partner4}/></li>
                <li className='carousel-item'><img src={partner5}/></li>
                <li className='carousel-item'><img src={partner6}/></li>
                </div>
                <div className='carousel-wrapper'>
                <li className='carousel-item'><img src={partner7}/></li>
                <li className='carousel-item'><img src={partner8}/></li>
                <li className='carousel-item'><img src={partner9}/></li>
                </div>
                <div className='carousel-wrapper'>
                <li className='carousel-item'><img src={partner10}/></li>
                <li className='carousel-item'><img src={partner3}/></li>
                <li className='carousel-item'><img src={partner12}/></li>
                </div>
                <div className='carousel-wrapper'>
                <li className='carousel-item'><img src={partner13}/></li>
                <li className='carousel-item'><img src={partner14}/></li>
                <li className='carousel-item'><img src={partner15}/></li>
                </div>
                <div className='carousel-wrapper'>
                <li className='carousel-item'><img src={partner16}/></li>
                <li className='carousel-item'><img src={partner17}/></li>
                <li className='carousel-item'><img src={partner3}/></li>
                </div>
            </ul>
            </div>
            
            <div className='business-info'>
                <h1 className='business-heading'>The best businesses all over the world, 
                    big and small, trust Flutterwave for growth.</h1>
                <p className='business-paragraph'>Flutterwave supports some of
                 the best businesses all over the world.</p>
                 <a href='#' className='business-link'>CHECK OUT OUR CUSTOMER SUCCESS STORIES</a>
            </div>
            </div>
        </div>
    )

}

export default Business