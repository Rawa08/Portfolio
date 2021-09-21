
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Col, Row } from 'react-bootstrap';

import ContactForm from '../components/ContactForm';

export default function Contact() {

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
          <Col lg={12} xs={12} className=""> <p>Hello and Welcome,</p></Col>
          <Col lg={12} xs={12} className=""><h1>My name is Rawa and I’m a fullstack software developer.</h1></Col>
        </div>
      </Row>
 {/* END OF HEADER SECTION */}





<Row className="d-flex justify-content-center mt-5">
         <Col lg={12}><p className={styles.contactHeader}>Let's get in touch</p></Col>
       <Col lg={8}>  <ContactForm /></Col>
</Row>
         <footer className={styles.footer}>
<p>My Footer</p>
      </footer>
    </div>
  )
}



