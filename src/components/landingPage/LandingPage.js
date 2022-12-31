import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'

function LandingPage() {
  return (
    <div className='landing-page'>
        <Navigation/>
        <Outlet/>
        </div>
  )
}

export default LandingPage