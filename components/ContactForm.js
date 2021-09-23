import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import emailjs from 'emailjs-com';



const ContactForm = () => {

  const [feedback, setFeedback] = useState({ success: false, text: '', alertVariant: '', notSuccess: false });


  const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.NEXT_PUBLIC_service_id, process.env.NEXT_PUBLIC_template_id, e.target, process.env.NEXT_PUBLIC_user_id)

      .then((result) => {
        if (result.status === 200) {
          setFeedback({ success: true, text: 'Your message have been sent, i will get back to you asap', alertVariant: 'info' })
          e.target.reset()
        }
        else {
          setFeedback({ success: false, text: 'Something went wrong please try again', alertVariant: 'danger', notSuccess: true })
        }
        console.log(result);
      }, (error) => {

      });
    
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
      {feedback.notSuccess && <Alert variant={feedback.alertVariant}>
        <p className={styles.feedback
        }>{feedback.text}</p>
      </Alert>}

    </>
  )
}

export default ContactForm
