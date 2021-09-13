import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import BootstrapCarousel from './BootstrapCarousel';


const ProjectCard = ({projectData}) => {

  const {images, title, description, devType, tech, link, github, appLink} = projectData;



    return (
      
            <Card style={{ width: '25rem' }}>
           
           <BootstrapCarousel images={images} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{devType}</Card.Subtitle>
    <Card.Text>
      {description}
      <ul>
        {tech.map( techItem => (<li>{techItem}</li>))}
      </ul>
    </Card.Text>
    <ListGroup className="list-group-flush">
    <ListGroupItem> {link ? <Card.Link href={link} target="_blank">Live App</Card.Link> : 'Not Deployed ' } <Card.Link href={github} target="_blank">Github</Card.Link>
    <Card.Link href={appLink}>Read more</Card.Link>
    </ListGroupItem>
  </ListGroup>
  </Card.Body>

</Card>
     
    )
}

export default ProjectCard





