const Order = require('../models/orders');

const orderCtrl = {};

orderCtrl.getOrders = async (req, res) =>{
    const orders = await Order.find();
    res.json(orders);
};

orderCtrl.createOrder = async (req, res) =>{
    const order = new Order({
        name : req.body.name,
        surname : req.body.surname,
        direction: req.body.direction,
        dished: req.body.dished
    });
    await order.save();
    res.json({
        status:'Order save'
    })
}

orderCtrl.getOrder = async (req, res) =>{
    const order = await Order.findById(req.params.id);
    res.json(order);
}

orderCtrl.editOrder = async (req, res) =>{
    const { id } = req.params;
    const order = {
        name : req.body.name,
        surname : req.body.surname,
        direction: req.body.direction,
        dished: req.body.dished
    }

    await Order.findByIdAndUpdate(id, {$set:order}, {new:true});
    res.json({status:'Order update'});
}

orderCtrl.deleteOrder = async (req, res) =>{

    await Order.findByIdAndDelete(req.params.id);
    res.json({status:'Order delete'});
}

module.exports = orderCtrl;