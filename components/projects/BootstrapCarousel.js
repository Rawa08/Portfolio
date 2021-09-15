import { Carousel } from 'react-bootstrap';

const BootstrapCarousel = ({images}) => {


    return (
<Carousel variant="top">
    {images.map(img => (
      
        <Carousel.Item key={img.src}>
          
        <img
          className="d-block w-100"
          src={img.src}
          alt={img.alt}
          height="200"
        />

      </Carousel.Item>
    ))
    }
  
</Carousel>
    )
}

export default BootstrapCarousel
