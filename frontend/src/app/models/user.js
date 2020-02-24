const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserShema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String,
    orders: Array
});

module.exports = mongoose.model('User', UserShema);