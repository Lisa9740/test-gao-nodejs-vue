var express = require('express');
var router = express.Router();

const computers = require("../controllers/computerController.js");

 router.get('/computers', computers.findAll)

router.post('/computers/create', computers.create)

// router.get('/computers', computers.findComputerAttribution)

module.exports = router;
