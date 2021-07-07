import React from 'react'
import './App.css'

// Components
import Header from './components/header/header.component'
import POS from './components/pos/pos.component'
import Card from './components/card/card.component'
import Security from './components/security/security.component'
import Business from './components/business/business.component'

const App = () =>{
    return (
      <div>
        <Header/>
        <POS/>
        <Card/>
        <Security/>
        <Business/>
      </div>
    )
}

export default App