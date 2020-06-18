const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(process.env.PROD_ACCESS_TOKEN);

const paymentController = {
    nuevoPago: (req,res)=>{
        try{
            // console.log(req)
            const token = req.body.token;
            const payment_method_id = req.body.payment_method_id;
            const installments = req.body.installments;
            const issuer_id = req.body.issuer_id;

            var payment_data = {
                transaction_amount: 100,
                token: token,
                description: 'User',
                installments: JSON.parse(installments),
                payment_method_id: payment_method_id,
                issuer_id: issuer_id,
                payer: {
                  email: 'desarrollo.gjotallan@gmail.com'
                }
              };

            console.log(payment_data)

            mercadopago.payment.save(payment_data).then(function (data) {
            // ...    
            // Imprime el estado del pago
            console.log(data.response.status)
            });


        } catch (err){
            console.log(err)
        }
    },
}

module.exports = paymentController;
