import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/page-transition-react-gsap/" exact activeStyle={{fontWeight: "bold", color: "red"}}>Home</NavLink>
            <NavLink to="/page-transition-react-gsap/about" exact activeStyle={{fontWeight: "bold", color: "red"}}>About</NavLink>
        </div>
    )
}

export default Header
