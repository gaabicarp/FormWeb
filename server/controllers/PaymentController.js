const mercadopago = require('mercadopago');
PROD_ACCESS_TOKEN = 'TEST-4058721951097212-061519-1237fe88c9a96a12a983503b6ba84873-69061373'
mercadopago.configurations.setAccessToken(PROD_ACCESS_TOKEN);

const paymentController = {
    nuevoPago: (req,res)=>{
        try{
            console.log(req.body)
            const token = req.body.token;
            const payment_method_id = req.body.payment_method_id;
            const installments = req.body.installments;
            const issuer_id = req.body.issuer_id;

            var payment_data = {
                transaction_amount: 100,
                token: token,
                description: 'User',
                installments: installments,
                payment_method_id: payment_method_id,
                issuer_id: issuer_id,
                payer: {
                  email: 'gaabicarp@gmail.com'
                }
              };

            mercadopago.payment.save(payment).then(function (data) {
            // ...    
            // Imprime el estado del pago
            Console.log(payment.status);
            console.log(data)
            });


        } catch (err){
            console.log(err)
        }
    },
}

module.exports = paymentController;
