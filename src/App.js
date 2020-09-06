import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'

class Home extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>

        <Carousel></Carousel>
      </>
    );
  }
}

export default Home;
