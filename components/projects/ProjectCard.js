import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import BootstrapCarousel from './BootstrapCarousel';
import style from '../../styles/Home.module.css'

const ProjectCard = ({projectData}) => {

  const {title, devType, description, techStack, liveLink, githubLink,  images} = projectData.fields;



    return (
      
            <Card style={{ width: '25rem'}} className="mt-4" >
           
           <BootstrapCarousel images={images}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{devType}</Card.Subtitle>
    <Card.Text className={style.ellipsis}>
      {description}
      </Card.Text>
      <Card.Body style={{ height: '10rem'}} >

        <ul>
        <li>{techStack[0]}</li>
        <li>{techStack[1]}</li>
        <li>{techStack[2]}</li>
        <li>{techStack[3]}...</li>
        </ul> 
      
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem> {liveLink && <Card.Link href={liveLink} target="_blank">Live App</Card.Link>} <Card.Link href={githubLink} target="_blank">Github</Card.Link>
    </ListGroupItem>
  </ListGroup>
  </Card.Body>

</Card>
     
    )
}

export default ProjectCard





