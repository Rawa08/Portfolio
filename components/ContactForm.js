import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import emailjs from 'emailjs-com';



const ContactForm = () => {

  const [feedback, setFeedback] = useState({ success: false, text: '', alertVariant: '',notSuccess:false });


  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vgumcc9','template_qvnrocc', e.target, 'user_bmodrfQbdflZTqZbhG5xt')
      .then((result) => {
        setFeedback({ success: true ,text: 'Your message have been sent, i will get back to you asap', alertVariant: 'info' })
          console.log(result.text);
      }, (error) => {
        setFeedback({ success: false, text: 'Something went wrong please try again', alertVariant: 'danger' , notSuccess:true})
      });
      e.target.reset()
  }


  return (
    <>{feedback.success ?

      <Alert variant={feedback.alertVariant}>
        <p className={styles.feedback
        }>{feedback.text}</p>
      </Alert>
      :
      <Form onSubmit={e => submitForm(e)} className="m-2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email:</Form.Label>
          <Form.Control type="email" name="email" required />
         

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Subject:</Form.Label>
          <Form.Control type="text" name="subject" required />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message:</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>
        <Button className={styles.formButton} type="submit">
          Submit
        </Button>
      </Form>}
      {feedback.notSuccess &&       <Alert variant={feedback.alertVariant}>
        <p className={styles.feedback
        }>{feedback.text}</p>
      </Alert>}

      </>
  )
}

export default ContactForm
