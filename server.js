const express = require('express');
const next = require('next');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use(express.urlencoded({ extended: true }))

  

  server.get('*', (req, res) => {
    return handle(req, res)
  })


  server.listen(5000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:5000')
  })

  server.post('/api/contact', (req, res) => {
    const {fromMail, subject1, message1 } = req.body
    console.log(req.body)
    res.send('success')
  })
})



