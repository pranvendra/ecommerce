const orderModel = require('../Models/Order')
const inventoryModel = require('../Models/Inventory')

async function orderProducts(req){
    try {
        let inventory = inventoryModel.getProducts(req.body.ids)
        // after this check for inventory of each products.
        // The available quantity should be greater than equal to the no. of products ordered.
        // Btw this should be implemented while checking out of the cart and before payment.
        // if no inventory present return error, that the product is out of stock
        let order = req.body.order
        //create the order object, to be inserted into the database
        //append payment details to it
        let orderPlaced = await orderModel.placeOrder(order)
        return orderPlaced
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    orderProducts
}