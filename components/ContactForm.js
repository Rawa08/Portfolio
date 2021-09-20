import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import styles from '../styles/Home.module.css';


const ContactForm = () => {
const [subject, setSubject] = useState('');
const [text, setText] = useState('');
const [from, setFrom] = useState('');
const [feedback, setFeedback] = useState(false);

const submitForm =  (e) => {
    e.preventDefault();
    
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          fromMail:from,
          subject1:subject,
          message1:text
      })
    }).then((res) => {
      if(res.status === 200) 
      {
            setFrom('');
    setSubject('');
    setText('');
    setFeedback(true)
      } else {

      }  
     })
  }



    return (
        <>{feedback ? <p>Your message is sent </p> :
<Form onSubmit={e => submitForm(e)} className="m-5">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your email:</Form.Label>
    <Form.Control type="email"  value={from} onChange={e => setFrom(e.target.value)} required />
    <Form.Text className="text-muted" onChange={e => setText(e.target.value) } />
      
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Subject:</Form.Label>
    <Form.Control type="text" value={subject}  onChange={e => setSubject(e.target.value)} required/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message:</Form.Label>
    <Form.Control as="textarea" rows={3} value={text} onChange={e => setText(e.target.value)} required/>
  </Form.Group>
  <Button className={styles.formButton} type="submit">
    Submit
  </Button>
</Form>}</>
    )
}

export default ContactForm
