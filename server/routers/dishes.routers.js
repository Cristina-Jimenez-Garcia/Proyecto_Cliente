const express = require('express');
const router = express.Router();
const disheCtrl = require('../controllers/dishes.controllers');

//Define API
router.get('/', disheCtrl.getDishes);
router.post('/', disheCtrl.createDishe);
router.get('/:id', disheCtrl.getDishe);
router.put('/:id', disheCtrl.editDishe);
router.delete('/:id', disheCtrl.deleteDishe);

module.exports = router;