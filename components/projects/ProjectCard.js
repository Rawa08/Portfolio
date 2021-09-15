import React from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import BootstrapCarousel from './BootstrapCarousel';
import style from '../../styles/Home.module.css'

const ProjectCard = ({projectData}) => {

  const {images, title, description, devType, tech, link, github, appLink, id} = projectData;



    return (
      
            <Card style={{ width: '25rem'}} className="p-2 mt-4" >
           
           <BootstrapCarousel images={images}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{devType}</Card.Subtitle>
    <Card.Text className={style.ellipsis}>
      {description}
      </Card.Text>
      <Card.Body style={{ height: '10rem'}} >
      {tech.length < 5 ?
       <ul>{tech.map( techItem => (<li key={techItem}>{techItem}</li>))}</ul> 
       : 
        <ul>
        <li>{tech[0]}</li>
        <li>{tech[1]}</li>
        <li>{tech[2]}</li>
        <li>{tech[3]}...</li>
        </ul> }
      
    </Card.Body>
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





