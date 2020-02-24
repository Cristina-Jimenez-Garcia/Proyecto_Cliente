const mongoose = require('mongoose');
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    name: {type: String, required: true},
    kind: {type: String, required: true},
    direction: {type: String, required: true},
});

module.exports = mongoose.model('Restaurant', RestaurantSchema); 