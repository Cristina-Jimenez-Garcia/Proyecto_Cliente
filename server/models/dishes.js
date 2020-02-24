const mongoose = require('mongoose');
const { Schema } = mongoose;

const DisheSchema = new Schema({
    name: {type: String, required: true},
    ingredients: {type: String, required: true},
    price: {type: Number, required: true},
    restaurant: {type: String, required: true},
});

module.exports = mongoose.model('Dishe', DisheSchema); 