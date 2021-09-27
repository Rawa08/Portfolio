
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Col, Row, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from 'contentful';


export const getStaticProps = async () => {


  const client = createClient({
    space: process.env.contentful_space,
    accessToken: process.env.contentful_secret
  });


  const expertiestData = await client.getEntries({ content_type: 'experties', order: 'sys.createdAt' });

  return {
    props: {
    
      experties: expertiestData.items
    },
    revalidate: 10
  }
}


export default function Home({ experties }) {


  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>Rawa DEV</title>
        <meta name="description" content="Fullstack web developer" />
        <meta name="description" content="Fullstack Software developer" />
        <link rel="icon" href="/favicon.ico" />

      </Head>


      {/* STACK SECTION */}
      <div className={styles.techStack}>
        <h2 className="me-auto">Expertise</h2>
        <Row className="justify-content-center mx-auto">
          {experties.map(item => (<Col lg={2} md={4} xs={4} key={item.sys.id} className="text-center"><Image src={`https:${item.fields.image.fields.file.url}`} width={item.fields.width} height={item.fields.height} className={styles.techLogo} alt={item.fields.alt} /> </Col>)
          )}

        </Row>
      </div>
      {/* END OF STACK SECTION */}

     
      <div className={styles.myProject}>
        <Link href="/projects"><a className={styles.projectLink}>MY PROJECTS</a></Link>
        <Link href="/projects"><p className={styles.projectLinkMobile}>Go to Projects &#8594;</p></Link>
        <Row className="d-flex justify-content-center align-items-center">
        
         <Col lg={4} md={4} xs={6}><Image src={'https://images.ctfassets.net/9epw4a4fl2u6/6LFzBlI1yDJ14H0PF3n1C5/ce39e935f7e53c2ae60b48e24d514b26/myF-Desktop.png'} width={400} height={300} alt="Project Icon" /></Col>
         <Col lg={4} md={4} xs={6}><Image src={'https://images.ctfassets.net/9epw4a4fl2u6/4G6SGzsOjOvzOzyXbJM8U0/8a12f7c02b6197c9822cb2cab3d917e3/elder-careDesktop.png'} width={400} height={300} alt="Project Icon" /></Col>
         <Col lg={4} md={4} xs={6}><Image src={'https://images.ctfassets.net/9epw4a4fl2u6/7nPcnzGcV3J1Kwvkqe5u9Q/48eff42d412add76a1967433cf5811b2/c-ledger-desktop.png'} width={400} height={300} alt="Project Icon" /></Col>
         <Col lg={4} md={4} xs={6}><Image src={'https://images.ctfassets.net/9epw4a4fl2u6/2GYZgvytc6WwGapo2CqZoW/effc19ec071a8ed1c6ca3504e07ba89c/c-ledger-Mobile.png'} width={400} height={300} alt="Project Icon" /></Col>
         <Col lg={4} md={4} xs={6}><Image src={'https://images.ctfassets.net/9epw4a4fl2u6/1QxsnQvX6UE94Uhs1cpZCS/fd927baf123f5a0a12f9c6234d600e40/TradeJack.png'} width={400} height={300} alt="Project Icon" /></Col>
         <Col lg={4} md={4} xs={6}><Image src={'https://images.ctfassets.net/9epw4a4fl2u6/3429n3MpRQ5v6FJH1pU5H6/f74e8842de7a4dded8ff70fdc4d34315/myf-ipad.png'} width={400} height={300} alt="Project Icon" /></Col>
        </Row>
      </div>

  
 
    </div>
  )
}



