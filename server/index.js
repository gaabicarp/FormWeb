const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config()
require('./functions/database.js');

const app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/routerUser'))
app.use('/result', require('./routes/routerResult'))
// app.use('/payment', require('./routes/routerPayment'))


app.listen(process.env.PORT, ()=> console.log('Server Up') )