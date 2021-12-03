// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.crypto.index);
router.get('/:id', ctrl.crypto.show);
router.post('/', ctrl.crypto.create);
router.put('/:id', ctrl.crypto.update);
router.delete('/:id', ctrl.crypto.destroy);

// exports
module.exports = router;