import { Carousel } from 'react-bootstrap';

const BootstrapCarousel = ({images}) => {


    return (
<Carousel variant="top" className="mt-2">
    {images.map(img => (
    
        <Carousel.Item>
          
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
