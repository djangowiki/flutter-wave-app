import React from 'react'
import './hero.styles.css'

// Assets
import heroImage1 from '../../res/img/krispy-kreme-counter.png'
import heroImage2 from '../../res/img/max.ng.png'
import heroImage4 from '../../res/img/samke-mhlongo.png'
// import heroImage5 from '../../res/img/hygeia.png'


const Hero = () => {
    return (
        <div className='hero-wrapper'>
            <div className='hero-info'>
                <h1 className='hero-heading'>Grow your business with Flutterwave.</h1>
                <h2 className='hero-subheading'>The easiest way to make
                 and accept payments from customers anywhere in the world.</h2>
                    <form className='form-btns'>
                    <button className='create-account-btn'>Create An Account</button>
                    <button className='speak-with-us-btn'>Speak with Us</button>
                    </form>
            
            </div>
                <div className='hero-images'>
                    <img src={heroImage2} alt='img1' className='hero-image img-2'/>
                    <img src={heroImage4} alt='img2' className='hero-image img-4'/>
                    <img src={heroImage1} alt='img3' className='hero-image img-1'/>
                    <img src={heroImage1} alt='img4' className='hero-image img-1'/>
                    {/* <img src={heroImage5} className='hero-image img-5'/> */}
                   
                </div>
        </div>
    )
}

export default Hero