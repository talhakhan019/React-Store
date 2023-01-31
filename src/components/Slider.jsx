import Carousel from 'react-bootstrap/Carousel';

function Slider(props) {
  return (
    <Carousel className='image-slider'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.images.image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.images.image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.images.image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;