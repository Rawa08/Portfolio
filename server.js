const express = require('express');
const next = require('next');
const sgMail = require('@sendgrid/mail')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use(express.urlencoded({
    extended: true
  }))



  server.get('*', (req, res) => {
    return handle(req, res)
  })


  server.listen(5000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:5000')
  })


  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  server.post('/api/contact', (req, res) => {



    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: process.env.toMail, // Change to your recipient
      from: process.env.senderMail, // Change to your verified sender
      subject: `Mail from rawa.se - ${req.body.subject}`,
      text: req.body.message,
      html: `<strong>Från ${req.body.fromMail}'</strong> <br /> <p>${req.body.message}</p>`
    };
    //ES6
    sgMail
    .send(msg)
    .then(() => {
      res.send('success')
      console.log('Email Sent!');
    })
    .catch(error => {
      res.status(500)
      //Log friendly error
      console.error(error.toString());
  
      //Extract error msg
      const {message, code, response} = error;
  
      //Extract response msg
      const {headers, body} = response;
    });
 })
})