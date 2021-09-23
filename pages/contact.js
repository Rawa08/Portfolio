
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Col, Row, Button } from 'react-bootstrap';
import githubLogo from '../public/github.png'
import linkedin from '../public/linkedin.png'
import ContactForm from '../components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {

  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Rawa DEV</title>
        <meta name="description" content="Fullstack web developer" />
        <meta name="description" content="Fullstack Software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
 <div className={styles.hero}>
  <Col lg={12} xs={12}> <p>Hello and Welcome</p></Col>
   <Col lg={12} xs={12}><h1>My name is Rawa and I’m a <br />Full-stack software developer.</h1></Col>
 </div>
</Row>
<Row className="d-flex justify-content-center mt-5">
         <Col lg={12}><p className={styles.contactHeader}>Let&apos;s get in touch</p></Col>
       <Col lg={8}>  <ContactForm /></Col>
</Row>


<footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/rawaaref" target="_blank" className="mx-2" rel="noreferrer"><Image src={linkedin} alt="Linkedin logo" width={30} height={25} /></a>
        <a href="https://github.com/rawa08" target="_blank" className="mx-2" rel="noreferrer"><Image src={githubLogo} alt="github logo" width={25} height={25} /></a>
        <Link href="/contact" passHref><Button className={styles.footerButton}>Contact</Button></Link>
        
     </footer>
    </div>
  )
}



