import Link from 'next/link';
import githubLogo from '../public/github.png'
import linkedin from '../public/linkedin.png'
import { Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Footer = () => {
    const footerButton = `${styles.formButton} m-4`;
    return (
        <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/rawaaref" target="_blank" className="mx-2"><Image src={linkedin} alt="Linkedin logo" width={30} height={25} /></a>
        <a href="https://github.com/rawa08" target="_blank" className="mx-2"><Image src={githubLogo} alt="github logo" width={25} height={25} /></a>
        <Link href="/contact"><Button className={footerButton}>Contact</Button></Link>
        
 
<strong className="ms-auto">&copy; 2021 Rawa Dev</strong>
     </footer>
    )
}

export default Footer
