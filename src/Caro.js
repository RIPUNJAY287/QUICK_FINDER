import React from 'react';
import ReactDOM from 'react-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Button } from 'semantic-ui-react'

import Carousel from 'react-bootstrap/Carousel'
class Caro extends React.Component{
    render(){
        return (
            <>

  <div class="container-fluid" style={{padding:'0px',width:'100%',height:'500px',boxShadow:'0 5px 10px rgb(0,0,0,0.16)',backgroundColor:'white'}}>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ulcdn.net/images/products/284266/slide/1998x1089/Vermont_Bed_Box_Bed_King_1.jpg?1568794506"
      style={{width:'100%',objectFit:'cover',height:'500px', objectPosition: "25% 10%"}}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
      style={{width:'100%',objectFit:'cover',height:'500px', objectPosition: "25% 10%"}}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/7q795efIqe1Tu6HePGDWuCP7MYE5BI7RuIxfMXkZ.jpg"
      style={{width:'100%',objectFit:'cover',height:'500px', objectPosition: "25% 10%"}}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</>
);
    }
}
export default Caro;