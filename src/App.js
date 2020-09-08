import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <AboutMe></AboutMe>
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
