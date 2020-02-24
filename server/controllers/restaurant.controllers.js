const Restaurant = require('../models/restaurants');

const restaurantCtrl = {};

restaurantCtrl.getRestaurants = async (req, res) =>{
    const restaurants = await Restaurant.find();
    res.json(restaurants);
};

restaurantCtrl.createRestaurant = async (req, res) =>{
    const restaurant = new Restaurant({
        name : req.body.name,
        kind : req.body.kind,
        direction: req.body.direction
    });
    await restaurant.save();
    res.json({
        status:'Restaurant save'
    })
}

restaurantCtrl.getRestaurant = async (req, res) =>{
    const restaurant = await Restaurant.findById(req.params.id);
    res.json(restaurant);
}

restaurantCtrl.editRestaurant = async (req, res) =>{
    const { id } = req.params;
    const restaurant = {
        name : req.body.name,
        kind : req.body.surname,
        direction: req.body.direction
    }

    await Restaurant.findByIdAndUpdate(id, {$set:restaurant}, {new:true});
    res.json({status:'Restaurant update'});
}

restaurantCtrl.deleteRestaurant = async (req, res) =>{

    await Restaurant.findByIdAndDelete(req.params.id);
    res.json({status:'Restaurant delete'});
}

module.exports = restaurantCtrl;