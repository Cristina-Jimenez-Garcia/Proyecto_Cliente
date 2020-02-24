const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../controllers/restaurant.controllers');

//Define API
router.get('/', restaurantCtrl.getRestaurants);
router.post('/', restaurantCtrl.createRestaurant);
router.get('/:id', restaurantCtrl.getRestaurant);
router.put('/:id', restaurantCtrl.editRestaurant);
router.delete('/:id', restaurantCtrl.deleteRestaurant);

module.exports = router;