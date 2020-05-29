const express = require('express')
require('dotenv').config()

const cors = require('cors')

require('./functions/database.js');

const app = express()

app.set(cors())
app.use(express.json())

app.use('/api', require('./routes/routerUser'))


app.listen(process.env.PORT, ()=> console.log('Server Up') )