import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import ProjectCard from '../components/projects/ProjectCard'


export default function Home() {
  const projectDataExampel = [{
    id:1,
    title:'My Fragrance',
    devType:"Fullstack development",
    description:'Ecommerce app',
    tech:['Python 3','Django 3','Javascript', 'Postgress' ],
    images :[{
      src:'https://github.com/Rawa08/FullstackWithDjango/raw/master/wireframes_mockups/desktop.png',
      alt:'alt text',
    },{src:'https://github.com/Rawa08/FullstackWithDjango/raw/master/wireframes_mockups/ipad.png',alt:'ipad viwe'}],
    link:'https://fullstackwithdjango.herokuapp.com/',
    github:'https://github.com/Rawa08/FullstackWithDjango',
    appLink:'homeLink'
  
  },

  {id:2,
    title:'Elder Care Supreme',
    devType:"Team Collaboration, Hackathon 2020",
    description:'Elder Care Supreme allows the elderly and aiders to connect, communicate, and collaborate on elderly daily tasks.',
    tech:['Html','CSS',' Materialize','Python 3','Django 3','Javascript', 'Postgress'],
    images :[{
      src:'https://github.com/NaoiseGaffney/ElderCareSupreme/blob/production/eldercaresupreme/static/images/ElderCareSupremeLogo.png?raw=true',
      alt:'alt text',
    }],
    link:'https://elder-care-supreme.herokuapp.com/',
    github:'https://github.com/Rawa08/Team-collaboration-ElderCareSupreme-Hackathon-Challenge-2020',
    appLink:'homeLink'
  
  }]

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
          <Col lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/front/html.webp')} width={75} height={100} className={styles.techLogo} alt="html5 logo" /> </Col>
          <Col lg={2} md={4} xs={4} className="text-center"> <Image src={require('../public/front/css.webp')} width={75} height={100} className={styles.techLogo} alt="CSS3 logo"/> </Col>
          <Col lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/front/js.webp')} width={75} height={100} className={styles.techLogo} alt="Javascript logo" /> </Col>
          <Col lg={2} md={4} xs={4} className="text-center"> <Image src={require('../public/front/react.webp')} width={75} height={100} className={styles.techLogo} alt="react logo" /></Col>

          <Col lg={2} md={4} xs={4} className="text-center"> <Image src={require('../public/front/next.webp')} width={75} height={100} className={styles.techLogo} alt="NEXT JS logo" /></Col>

          <Col lg={2} md={4} xs={4} className="text-center" className="text-center"><Image src={require('../public/front/bootstrap.webp')} width={75} height={100} className={styles.techLogo} alt="bootstrap logo" /> </Col>
 
          <Col lg={2} md={4} xs={4} className="text-center"><Image  src={require('../public/back/node.webp')} width={100} height={75}  className={styles.techLogo} alt="NodeJs logo" /> </Col>
          <Col lg={2} md={4} xs={4} className="text-center"> <Image src={require('../public/back/express.webp')} width={100} height={75} className={styles.techLogo} alt="expressJs logo" /> </Col>
          <Col lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/Python.webp')} width={100} height={75} className={styles.techLogo} alt="Python Programming Language logo" /> </Col>
          <Col lg={2} md={4} xs={4} className="text-center"> <Image src={require('../public/back/django.webp')} width={100} height={75} className={styles.techLogo} alt="Django python framework logo"/></Col>

          <Col lg={2} md={4} xs={4} className="text-center"> <Image src={require('../public/back/rest.webp')} width={100} height={75} className={styles.techLogo} alt="REST API logo" /></Col>
          <Col lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/graph.webp')} width={100} height={75} className={styles.techLogo} alt="GraphQL logo" /> </Col>
 
          <Col  lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/Webpack.webp')} width={100} height={75} className={styles.techLogo} alt="Webpack logo" /> </Col>
          <Col  lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/other/Chaijs.webp')} width={100} height={75} className={styles.techLogo} alt="Chai test library logo" /> </Col>
          <Col  lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/other/Mocha.webp')} width={100} height={75} className={styles.techLogo} alt="Mocha JavaScript test framework logo"/> </Col>
          <Col  lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/other/JasmineJs.webp')} width={100} height={75} className={styles.techLogo} alt="JasminJs JavaScript test framework logo" /> </Col>
          <Col  lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/other/TravisCi.webp')} width={100} height={75} className={styles.techLogo} alt="Travis CI logo" /> </Col>
   
          <Col  lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/other/Postgress.webp')} width={100} height={75} className={styles.techLogo} alt="postgress database system logo" /> </Col>
          <Col  lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/other/MongoDB.webp')} width={100} height={75} className={styles.techLogo} alt="Mysql database system logo" /> </Col>
          <Col  lg={2} md={4} xs={4} className="text-center"><Image src={require('../public/back/other/Mysql.webp')} width={100} height={75} className={styles.techLogo} alt="mongodb document based databaselogo" /> </Col>
        </Row>
      </div>
      {/* END OF STACK SECTION */}


      <div className={styles.myProject}>
      <h2>MY PROJECTS</h2>
      <Row className="d-flex justify-content-center align-items-center">
        {projectDataExampel.map(project => (<Col key={project.id} lg={4} className="justify-content-center d-flex"><ProjectCard projectData={project}/></Col>))}
        
    
      
        <Col lg={4} className="text-center"><h6>My Fragrance</h6></Col>
        <Col lg={4} className="text-center"><h6>Trade Jack F-B</h6></Col>
        <Col lg={4} className="text-center"><h6>Elder Care Supreme</h6></Col>
        <Col lg={4} className="text-center"><h6>Digital Tools</h6></Col>
        <Col lg={4} className="text-center"><h6>Customer Ledger F-B</h6></Col>
 
        
      </Row>

      </div>
    </div>
  )
}
