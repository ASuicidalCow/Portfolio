import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pat from '../../assets/images/pat.png';
import foodTruck from '../../assets/images/foodTruck.png';
import rockfish from '../../assets/images/Untitled.png';
import './style.css';
export class BootstrapCarousel extends React.Component {
  render() {
    return (
      <div className='container mt-5 '>
        <div className='container-fluid mb-5'>
          
          <h1 className='text-center'>Welcome to my site!</h1>
        </div>
        <Carousel className='w-100 h-10' id='carousel'>
          <Carousel.Item>
            <img
              className='d-block w-100 h-10'
              src={pat}
              alt='Pat Knows best'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 h-10'
              src={foodTruck}
              alt='Food truck'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=' w-100 h-10'
              src={rockfish}
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default BootstrapCarousel;
