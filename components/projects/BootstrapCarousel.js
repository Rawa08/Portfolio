import { Carousel } from 'react-bootstrap';
import Image from 'next/image'


const BootstrapCarousel = ({images}) => {

    return (
<Carousel variant="top">
    {images.map(img => (
        
        <Carousel.Item key={img.fields.title}>
          
          <Image src={`https:${img.fields.file.url}`} width={400} height={300} alt={img.fields.title} />

      </Carousel.Item>
    ))
    }
  
</Carousel>
    )
}

export default BootstrapCarousel
