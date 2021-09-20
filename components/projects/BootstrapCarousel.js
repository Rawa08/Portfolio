import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const BootstrapCarousel = ({images, bgColor}) => {


    return (
<Carousel variant="dark" className="p-2 rounded-top" style={{backgroundColor: bgColor}}>
    {images.map(img => (
        
        <Carousel.Item key={img.fields.title}>
           <Zoom transitionDuration={800}>
          <Image src={`https:${img.fields.file.url}`} width={400} height={300} alt={img.fields.title} />
          </Zoom>
      </Carousel.Item>
    ))
    }
  
</Carousel>
    )
}

export default BootstrapCarousel
