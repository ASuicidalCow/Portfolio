/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';



class Navbar extends Component{

  render(){
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light '>
        <a className='navbar-brand' href='/'>
          Aaron.B Portfolio
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse float-right' id='navbarNav'>
          <ul className='navbar-nav '>
            <li className='nav-item active'>
              <a className='nav-link float-right' href='/'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item '>
              <a className='nav-link' href='#'>
                Portfolio 
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;