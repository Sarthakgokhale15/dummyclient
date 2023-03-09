import Carousel from 'react-bootstrap/Carousel';
// import './CustomCarousel.css'

function CustomCarousel() {
  return (
    <div className='carousal'>
    <Carousel controls={false} indicatorLabels={['.']}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/suprkid/World.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678362766664"
          alt="First slide"
        />
       <Carousel.Caption>
          {/* <h3>Cube Competition</h3> */}
          {/* <p>...</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/suprkid/3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678362735105"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Mental Math</h3> */}
          {/* <p>...</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/suprkid/World__1_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678362748701"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>SUPER Tank</h3> */}
          {/* <p>...</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/suprkid/4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678362761920"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>SUPER Tank</h3> */}
          {/* <p>...</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CustomCarousel;