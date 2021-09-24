
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/projects/ProjectCard'
import { createClient } from 'contentful';





export const getStaticProps = async () => {


  const client = createClient({
    space: process.env.contentful_space,
    accessToken: process.env.contentful_secret
  });

  const projectData = await client.getEntries({ content_type: 'projects' });


  return {
    props: {
      projects: projectData.items,

    },
    revalidate: 10
  }
}


export default function Projects({ projects}) {


  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Rawa DEV</title>
        <meta name="description" content="Fullstack web developer" />
        <meta name="description" content="Fullstack Software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>





      <div className={styles.myProject}>
        <h2>MY PROJECTS</h2>
        <Row className="d-flex justify-content-center align-items-center">
          {projects.map(project => (<Col key={project.sys.id} lg={4} className="justify-content-center d-flex"><ProjectCard projectData={project} /></Col>))}

        </Row>
      </div>



    </div>
  )
}



