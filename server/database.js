const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017/mean-orders";

mongoose.connect(URI)
    .then(db => console.log("DB is connected"))
    .catch(err => console.log('Error en BD: '+err));

module.exports = mongoose;