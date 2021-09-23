
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import ProjectCard from '../components/projects/ProjectCard'
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
    },
    revalidate: 10
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
          <Col lg={12} xs={12}> <p>Hello and Welcome</p></Col>
          <Col lg={12} xs={12}><h1>My name is Rawa and I’m a fullstack software developer.</h1></Col>
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
        {projects.map(project => (<Col key={project.sys.id} lg={4} className="justify-content-center d-flex"><ProjectCard projectData={project} /></Col>))}
        
      </Row>
      </div>


         <footer className={styles.footer}>
<p>My Footer</p>
      </footer>
    </div>
  )
}



