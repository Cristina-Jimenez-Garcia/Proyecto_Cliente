const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    direction: {type: String, required: true},
    dished: {type: String, required: true}
});

module.exports = mongoose.model('Order', OrderSchema); 