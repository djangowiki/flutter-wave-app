import React from 'react'
import './security.styles.css'

// Assets
import securityVideo from '../../res/videos/flutterwave security.mp4'

const Security = () => {

    return (
        <div className='security'>
            <div className='security-wrapper'>
            
            <div className='video-wrapper'>
                <video autoPlay={true} loop muted={true} className='video'>
                    <source src={securityVideo}></source>
                </video>
            </div>
            <div className='video-info'>
                <h1 className='security-heading'>Safety and security guaranteed.</h1>
                <p className='security-paragraph'>At Flutterwave, we take security seriously 
                so every payment made on our platform is 100% secure, even exceeding 
                industry standard.</p>
                <h2 className='security-sub-heading'>ISO 27001 & 22301 Certification</h2>
                <p className='security-paragraph'>The ISO 27001 & 22301 certification means that
                 we have acceptable business practices and processes, including 
                 a robust business continuity plan.</p>
                <h2 className='security-sub-heading'>PA DSS & PCI DSS Compliant</h2>
                <p className='security-paragraph'>This certification is proof that 
                Flutterwave as a payment gateway processor has satisfied highest 
                level of Security Audit.</p>
            </div>
            
            </div>
        </div>
    )
}

export default Security;