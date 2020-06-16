const express = require('express')
require('dotenv').config()
const PROD_ACCES_TOKEN = 'TEST-4058721951097212-061519-1237fe88c9a96a12a983503b6ba84873-69061373'

const cors = require('cors')

require('./functions/database.js');

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/routerUser'))
app.use('/result', require('./routes/routerResult'))
app.use('/payment', require('./routes/routerpayment'))


app.listen(process.env.PORT, ()=> console.log('Server Up') )