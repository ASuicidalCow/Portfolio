import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pat from '../../assets/images/pat.png';
import foodTruck from '../../assets/images/foodTruck.png';
import rockfish from '../../assets/images/Untitled.png';
export class BootstrapCarousel extends Component {
  render() {
    return (
      <div className='container mt-5 md-col-3 h-20'>
        <Carousel>
          <Carousel.Item>
            <img className='d-block w-100 h-25' src={pat} alt='Pat Knows best' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100 h-25' src={foodTruck} alt='Food truck' />
            <Carousel.Caption>
              <h3>Food Truck Frenzy</h3>
              <p>Second project for the University of Utah Coding Bootcamp</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100 h-25' src={rockfish} alt='Third slide' />

            <Carousel.Caption>
              <h3>Rockfish Conservation</h3>
              <p>Third project for the University of Utah Coding Bootcamp</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default BootstrapCarousel;
