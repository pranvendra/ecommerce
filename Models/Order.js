uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');
var schema = new mongoose.Schema({ 
    shipping: {
        customerId: {type:String, required:true},
        address: String,
        tracking: {
          tracking_number: String,
          meta:String
        },
    },
    payment: {
        totalCost:Number,
        method: String,
        transaction_id: String
    },   
    products: [
        {
            quantity: {type:Number, required:true}, 
            productId:{type:String, required:true},
            productName: String, 
            perUnitCost:Number,
        }
    ],
    timeStamp:{type:Date, required:true}
});

// schema.plugin(uniqueValidator, {message: 'is already taken.'});
var Order = mongoose.model('Order', schema);
async function placeOrder(body){
    try {
        let order = await Order.create(body)
        return order
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    placeOrder
}