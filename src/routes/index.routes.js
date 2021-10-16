const route = require("express").Router();
const { sendMessage } = require('../twilio/sendSMS');
const { body, validationResult } = require('express-validator');
const smsModel = require('../models/sms');

route.get("/", (req, res) => {
    return res.render('index');
}); 

route.post('/send',
body('to')
.matches(/^\+54{1}[0-9]{3,14}$/)
.withMessage('Nro de telefono incorrecto.'), 
body('message')
.notEmpty()
.withMessage('El campo mensaje no debe estar vacio.'), async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.render('index',{errors:  errors.array()});
    }
    
    const body = req.body;   
    await smsModel.create(body);
    const response = await sendMessage(body.message, body.to);    
    return res.render('index',{errors: false});
});

module.exports = route;