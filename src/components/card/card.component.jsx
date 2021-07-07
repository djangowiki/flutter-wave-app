import React from 'react'
import './card.styles.css'

// Assets
import cardVideo from '../../res/videos/flutterwave card.mp4'

const Card = () => {

    return (
        <div className='card'>
            <div className='card-info'>
                <h1 className='card-heading-big'>Issue cards, create new businesses.</h1>
                <p className='card-paragraph'>Create cards for your team, add spending limits, make them site-specific and so much more.</p>
                <h5 className='card-heading'>Create virtual Mastercard and VISA cards</h5>
                <p className='card-paragraph'>Using the Flutterwave API, you can instantly create and manage virtual cards. Cards can be used instantly through mobile wallets and global websites.</p>
                <h5 className='card-heading'>Create new FinTech businesses</h5>
                <p className='card-paragraph'>With just a few lines of Issuing API code, the possibilities for your new FinTech business(es) are endless.</p>
                <a href='http://www.flutterwave.com' className='card-link'>LEARN MORE ABOUT CARD ISSUING</a>
            </div>
            <div className='card-video'>
                <video className='card-movie' autoPlay={true} muted={true} loop>
                <source src={cardVideo} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}

export default Card