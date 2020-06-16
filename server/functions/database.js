const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const conexion = mongoose.connection

conexion.once('open', ()=> console.log("Conectado a BD"))