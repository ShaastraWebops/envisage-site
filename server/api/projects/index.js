'use strict';

var express = require('express');
var controller = require('./projects.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);
router.get('/view/:name', controller.serve);
router.get('/inside/view/:name', controller.serveinside);

module.exports = router;
