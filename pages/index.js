
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import ProjectCard from '../components/projects/ProjectCard'
import {projectDataExampel} from '../data.js';
import Link from 'next/link'
import { createClient } from 'contentful';


export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.contentful_space,
    accessToken: process.env.contentful_secret
  });

  const projectData = await client.getEntries({ content_type: 'projects'});
  const expertiestData = await client.getEntries({ content_type: 'experties', order:'sys.createdAt'});

  return {
    props:{
      projects: projectData.items,
      experties: expertiestData.items
    }
  }
}


export default function Home({projects, experties}) {

  
  experties.map(item => {
    if (typeof item.fields.image !== 'undefined'){
    return item.imageLink='https:' + item.fields.image.fields.file.url}
  })



  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Rawa DEV</title>
        <meta name="description" content="Fullstack web developer" />
        <meta name="description" content="Fullstack Software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

 {/* HEADER SECTION */}
      <Row>
        <div className={styles.hero}>
          <Col lg={2} xs={12} className="align-items-lg-end justify-content-lg-start justify-content-center  d-flex ms-lg-5"> <div className={styles.profileImage}></div></Col>
          <Col lg={10} xs={12} className="align-items-end justify-content-start d-flex"><h2 className={styles.heroTitle} >Hi,<br /> I’m Rawa and I’m a fullstack software developer.</h2></Col>
        </div>
      </Row>
 {/* END OF HEADER SECTION */}

{/* STACK SECTION */}
      <div className={styles.techStack}>
        <h2>Expertise</h2>
        <Row className="justify-content-center mx-auto">
         {experties.map(item => {
          if(item.imageLink){
            return (<Col lg={2} md={4} xs={4} key={item.sys.id} className="text-center"><Image src={item.imageLink} width={item.fields.width} height={item.fields.height} className={styles.techLogo} alt={item.fields.alt} /> </Col>)
          }
         })}

        </Row>
      </div>
      {/* END OF STACK SECTION */}


      <div className={styles.myProject}>
      <h2>MY PROJECTS</h2>
      <Row className="d-flex justify-content-center align-items-center">
        {projects.map(project => (<Col key={project.sys.id} lg={4} className="justify-content-center d-flex"><ProjectCard projectData={project}/></Col>))}
        
      </Row>
      </div>
<Row>
      <div className={styles.techStack}>
        <h2>About Me</h2>
        
        <p className="text-center">I am a former account manager who acquired a strong interest in software development through hobby coding.
        <br /> I enjoy communicating new technologies and technical concepts with my fellow team members.
        <br />I am passionate about human interactions with digitized services...<Link href="/about">read more</Link> 
</p>
        
        
        
        </div>

        </Row>



         <footer className={styles.footer}>
<p>My Footer</p>
      </footer>
    </div>
  )
}



