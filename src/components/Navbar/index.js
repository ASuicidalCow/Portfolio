/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './style.css';



class Navbar extends Component{

  render(){
    return (
      <nav className='navbar navbar-expand-lg bg-dark text-light '>
        <a className='navbar-brand' href='/'>
          Aaron.B Portfolio
        </a>
        <button
          className='navbar-toggler bg-light float-right'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse float-right' id='navbarNav'>
          <ul className='navbar-nav col-md-5'>
            <li className='nav-item active float-right'>
              <a className='nav-link' href='/'>
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