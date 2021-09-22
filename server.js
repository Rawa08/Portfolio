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
    const {
      fromMail,
      subject,
      message
    } = req.body;

    const msg = {
      to: process.env.toMail, // Change to your recipient
      from: fromMail, // Change to your verified sender
      subject: subject,
      text: message,

    }


    sgMail
      .send(msg)
      .then(() => {
        res.send('success')
      })
      .catch((error) => {
        res.status(500).send('error')
        console.error(error)
      
      })


  })
})