const express = require('express');

const router = express.Router();

router.route('/respuestas')
    .get((req,res)=>{
        res.send("Respuestas")
    })

module.exports = router