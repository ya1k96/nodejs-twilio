const route = require("express").Router();
const { sendMessage } = require('../twilio/sendSMS');

route.get("/", (req, res) => {
    return res.render('index');
}); 

route.post('/send', async (req, res) => {
    const body = req.body;
    // const response = await sendMessage(body.body, body.phone);
    res.send('Sended');
});

module.exports = route;