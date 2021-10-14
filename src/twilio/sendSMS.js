const config = require('../config');
const client = require('twilio')(config.twilioSid, config.twilioToken);

/**
 * 
 * @param {string} body - Message
 * @param {string} phone - Phone number
 */
async function sendMessage(body, phone) {
    return await client.messages.create({
        to: config.phone,
        from: '+12058329927',
        body: 'Test 1'
    })
}

module.exports = {sendMessage}