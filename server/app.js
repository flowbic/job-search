const express = require('express')
const helmet = require('helmet')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
var cors = require('cors')
const Platsbanken = require('./models/Platsbanken')

// const app = express()

// // Adds cors header so webpages can access
// app.use(cors())

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// // Helmet for security
// app.use(helmet())

// // routes
// require('./routes/')(app)

// app.listen(port || 3000, () => {
//     console.log(`running on localhost:${port}`)
//     console.log('Press Ctrl-C to terminate...')
// })

var pb = new Platsbanken();

pb.searchWords = ['python', 'javascript', 'java']
pb.getJobById()
