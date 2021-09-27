import { Col, Row} from 'react-bootstrap';
import styles from '../styles/Home.module.css';


const Header = () => {
    return (

 <Row>
 <div className={styles.hero}>
  <Col lg={12} xs={12}> <p>Hello and Welcome</p></Col>

   <Col lg={12} xs={12}><h1>I’M RAWA. <br />FULL STACK SOFTWARE DEVELOPER FROM STOCKHOLM</h1></Col>
 </div>
</Row>

    )
}

export default Header
