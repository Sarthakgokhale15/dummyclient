import Carousel from 'react-bootstrap/Carousel';
// import './CustomCarousel.css'

function CustomCarousel() {
  return (
    <div className='carousal'>
    <Carousel controls={false} indicatorLabels={['.']}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/suprkid/unsplash_a1uOp0qdAwQx.png"
          alt="First slide"
        />
       <Carousel.Caption>
          <h3>Cube Competition</h3>
          {/* <p>...</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/suprkid/unsplash_a1uOp0qdAwQx.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Mental Math</h3>
          {/* <p>...</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/suprkid/unsplash_a1uOp0qdAwQx.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>SUPER Tank</h3>
          {/* <p>...</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CustomCarousel;