import React from 'react'
import './header.styles.css'

// Components
import Navigation from '../navigation/navigation.component'
import Hero from '../hero/hero.component'

const Header = () => {
    return (
        <header className='flutter-header'>
            <Navigation/>
            <Hero/>
        </header>
    )
}

export default Header