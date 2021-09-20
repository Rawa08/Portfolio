import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'


const BootstrapCarousel = ({images, bgColor}) => {


    return (
<Carousel variant="dark" className="p-2 rounded-top" style={{backgroundColor: bgColor}}>
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
