import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import Footer from './components/Footer';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
