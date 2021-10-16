const {Schema, model} = require('mongoose');

const smsSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = model('sms', smsSchema);