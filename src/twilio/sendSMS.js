const config = require('../config');
const client = require('twilio')(config.twilioSid, config.twilioToken);

/**
 * 
 * @param {string} body - Message
 * @param {string} phone - Phone number
 */
async function sendMessage(body, phone) {
    return await client.messages.create({
        to: phone,
        from: config.phone,
        body
    })
}

module.exports = {sendMessage}