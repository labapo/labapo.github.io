import React from 'react'
import { NavBar } from './NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import Intro from './Intro'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'

export const Contents = () => {
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path='/resume' component={Resume} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/testimonials' component={Testimonials} />
            <Route path='/' component={Intro} />
        </Routes>
    </div>
  )
}
