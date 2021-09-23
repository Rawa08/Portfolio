import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import BootstrapCarousel from './BootstrapCarousel';
import style from '../../styles/Home.module.css'
import githubLogo from '../../public/github.png'
import Image from 'next/image'

const ProjectCard = ({projectData}) => {

  const {title, devType, description, techStack, liveLink, githubLink,  images, backgroundColor} = projectData.fields;



    return (
      
            <Card style={{ width: '25rem'}} className="mt-4 mb-4">
           
           <BootstrapCarousel images={images} bgColor={backgroundColor}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{devType}</Card.Subtitle>
    <Card.Text className={style.ellipsis}>
      {description}
      </Card.Text>
      <Card.Body style={{ height: '10rem'}} >

        <ul>
       {techStack.map(stack => ( <li key={stack}>{stack}</li>))}
  

        </ul> 
      
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem> {liveLink && <Card.Link href={liveLink} target="_blank">Live App here</Card.Link>} <Card.Link href={githubLink} target="_blank"><Image src={githubLogo} alt="Picture of the author" width={25} height={25} /></Card.Link>
    </ListGroupItem>
  </ListGroup>
  </Card.Body>

</Card>
     
    )
}

export default ProjectCard





