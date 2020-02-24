const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose }= require('./database');
const cors = require('cors');

//Settings (configuraciones básicas el servidor)
app.set('port', process.env.PORT || 3000);

//Middlewares (librerias)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//Routes
app.use('/api/orders', require('./routers/orders.routers'));
app.use('/api/users', require('./routers/users.routers'));
app.use('/api/restaurants', require('./routers/restaurants.routers'));
app.use('/api/dishes', require('./routers/dishes.routers'));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});