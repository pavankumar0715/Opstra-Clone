const express = require('express');
const router = express.Router();

const cmpController = require("../../controller/api/cmp_controller");
const optionChainController = require("../../controller/api/option_chain_controller");

router.get('/cmp',cmpController.getSpotPrice)
router.get('/optionChain',optionChainController.getData)

module.exports = router;