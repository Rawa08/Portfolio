import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import BootstrapCarousel from './BootstrapCarousel';
import style from '../../styles/Home.module.css'

const ProjectCard = ({projectData}) => {

  const {title, devType, description, techStack, liveLink, githubLink,  images, backgroundColor} = projectData.fields;



    return (
      
            <Card style={{ width: '25rem'}} className="mt-4 mb-4" >
           
           <BootstrapCarousel images={images} bgColor={backgroundColor}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{devType}</Card.Subtitle>
    <Card.Text className={style.ellipsis}>
      {description}
      </Card.Text>
      <Card.Body style={{ height: '10rem'}} >

        <ul>
       {techStack.map(stack => ( <li>{stack}</li>))}
  

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





