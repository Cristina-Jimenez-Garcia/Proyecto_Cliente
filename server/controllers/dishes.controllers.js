const Dishe = require('../models/dishes');

const disheCtrl = {};

disheCtrl.getDishes = async (req, res) =>{
    const dishes = await Dishe.find();
    res.json(dishes);
};

disheCtrl.createDishe = async (req, res) =>{
    const dishe = new Dishe({
        name : req.body.name,
        ingredients : req.body.ingredients,
        price : req.body.price,
        restaurant : req.body.restaurant
    });
    await dishe.save();
    res.json({
        status:'Dishe save'
    })
}

disheCtrl.getDishe = async (req, res) =>{
    const dishe = await Dishe.findById(req.params.id);
    res.json(dishe);
}

disheCtrl.editDishe = async (req, res) =>{
    const { id } = req.params;
    const dishe = {
        name : req.body.name,
        price : req.body.price,
    }

    await Dishe.findByIdAndUpdate(id, {$set:dishe}, {new:true});
    res.json({status:'Dishe update'});
}

disheCtrl.deleteDishe = async (req, res) =>{

    await Dishe.findByIdAndDelete(req.params.id);
    res.json({status:'Dishe delete'});
}

module.exports = disheCtrl;