import React, { useState } from 'react'
import  { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import '../navbar/navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#barry'>What is Barry Ai?</a></p>
    <p><a href='#possibility'>Open Ai</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState (false)

  return (
    <div className='barry__navbar'>
      <div className="barry__navbar-links">
        <div className="barry__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="barry__navbar-links_container">
          <p><a href='#home'>Home</a></p>
          <p><a href='#barry'>What is Barry Ai?</a></p>
          <p><a href='#possibility'>Open Ai</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        <Menu />
        </div>

      </div>

      <div className="barry__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className="barry__navbar-menu">
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu (false) } /> 
        : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu (true) } />
        }
        {toggleMenu &&(
          <div className='barry__navbar-menu_container scale-up-center'>
            <div className='barry__navbar-menu_container-links'>
              <Menu />
              <div className="barry__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
          
          
        )}

      </div>

    </div>
  )
}

export default Navbar
