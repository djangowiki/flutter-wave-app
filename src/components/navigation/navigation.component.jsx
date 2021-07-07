import React from 'react'
import './navigation.styles.css'
import {ReactComponent as Logo} from '../../res/img/logo.svg'



const Navigation = () => {
    return (
        <div className='nav-menu'>
            <div className='logo-wrapper'>
                <Logo/>
            </div>
            <div className='nav-menu-items-wrapper'>
                <ul className='nav-menu-items-list'> 
                    <li className='nav-menu-item'>
                        <a href='https://www.flutterwave.com' className='nav-menu-item-link'>Our Solutions</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a href='https://www.flutterwave.com' className='nav-menu-item-link'>Developers</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a href='https://www.flutterwave.com' className='nav-menu-item-link'>Resources</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a href='https://www.flutterwave.com' className='nav-menu-item-link'>Pricing</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a href='https://www.flutterwave.com' className='nav-menu-item-link'>Sign In</a>
                    </li>
                    <li className='nav-menu-item'>
                        <a href='https://www.flutterwave.com' className='nav-menu-item-link sign-up'>Create An Account</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation