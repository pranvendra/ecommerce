const express = require('express');
const router = express.Router();
const accountController = require('../Controllers/accountController')
const inventoryController = require('../Controllers/inventoryController')
const orderController = require('../Controllers/orderController')

router.post('/createAccount', async (req, res)=> {
    try {
        var account = await accountController.createAccount(req)
        return res.send(200, account)   
    } catch (error) {
        return res.error(error)
    }
})

router.post('/addProduct', async (req, res)=> {
    try {
        var product = await inventoryController.addProducts(req)
        return res.send(200, product)   
    } catch (error) {
        return res.error(error)
    }
})

router.post('/placeOrder', async (req, res)=> {
    try {
        var order = await orderController.orderProducts(req)
        return res.send(200, order)   
    } catch (error) {
        return res.error(error)
    }
})

module.exports = router