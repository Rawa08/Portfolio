
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


<Row className="d-flex justify-content-center mt-5">
         <Col lg={12}><p className={styles.contactHeader}>Let&apos;s get in touch</p></Col>
       <Col lg={8}>  <ContactForm /></Col>
</Row>

    </div>
  )
}



