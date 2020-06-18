const express = require('express');
const router = express.Router();
const paymentController = require('./../controllers/PaymentController');
const multer = require('multer')
let upload = multer();


router
    .route('/new')
    .post(paymentController.nuevoPago)

module.exports = router;