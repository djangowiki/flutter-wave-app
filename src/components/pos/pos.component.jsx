import React from 'react'
import './pos.styles.css'

// Assets
import posImage from '../../res/img/pos-for-payments.a29ebf7.jpg'

const POS = ()=> {
    return(
        <div className='pos'>
            <div className='pos-wrapper'>
            <h1 className='pos-heading'>Create seamless payment experiences
             for your customers.</h1>
            <div className='pos-content'>
                <div className='image-wrapper'>
                <img src={posImage} alt='img6' className='pos-image'/>
                </div>
               
                <div className='pos-info'>
                    <h1 className='pos-info-heading'>Accept payments anywhere.</h1>
                    <p className='pos-info-paragraph'>One platform that lets you sell wherever your
                         customers are — online, 
                        in‑person, anywhere in the world, and
                         everywhere in‑between.
                    </p>
                    <div className='pos-info-features'>
                        <div>
                        <h2 className='pos-info-features-heading'>Online (Website & Mobile)</h2>
                        <p className='pos-info-features-paragraph'>Sell online with an ecommerce website, Mobile App and more.</p>
                        </div>

                        <div>
                        <h2 className='pos-info-features-heading'>POS (Point Of Sale)</h2>
                        <p className='pos-info-features-paragraph'>Sell in-person at your store locations, pop-ups, concerts.</p>
                        </div>
                    </div>
                    <h2 className='pos-info-features-heading'>Reach more people with more payment methods</h2>
                    <p className='pos-info-features-paragraph'>With little to no effort, remove the boundaries to scaling your business and reach more customers with just one platform.</p>
                    <ul className='pos-list'>
                        <div className='list-wrapper'>
                        <li className='pos-list-item'>
                            <span className='check-box'>
                            Debit and Credit Cards
                            </span>
                           
                            </li>
                        <li className='pos-list-item'><span className='check-box'> Bank Account</span></li>
                        <li className='pos-list-item'><span className='check-box'>Mobile Money</span></li>
                        <li className='pos-list-item'><span className='check-box'>POS</span></li>
                        </div>

                        <div className='list-wrapper'>
                        <li className='pos-list-item'><span className='check-box'>M-Pesa</span></li>
                        <li className='pos-list-item'><span className='check-box'>Visa QR</span></li>
                        <li className='pos-list-item'><span className='check-box'>Bank Transfer</span></li>
                        <li className='pos-list-item'><span className='check-box'>USSD</span></li>
                        </div>  
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default POS