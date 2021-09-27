import Link from 'next/link';
import githubLogo from '../public/github.png'
import linkedin from '../public/linkedin.png'
import { Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Footer = () => {
    const homeButton = `ms-lg-auto m-1 ${styles.footerButton}`
    return (
    
           
               
        <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/rawaaref" target="_blank" className="mx-2" rel="noreferrer"><Image src={linkedin} alt="Linkedin logo" width={30} height={25} /></a>
        <a href="https://github.com/rawa08" target="_blank" className="mx-2" rel="noreferrer"><Image src={githubLogo} alt="github logo" width={25} height={25} /></a>
        <Link href="/contact" passHref><Button className={styles.footerButton}>Contact</Button></Link>
        <Link href="/" passHref><Button className={homeButton}>Home &#8593;</Button></Link>
     </footer>
     
    )
}

export default Footer
