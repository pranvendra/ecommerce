var uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose')
var schema = new mongoose.Schema({ 
    name:{type:String, unique:true, required:[true, "can't be blank"], index:true},
    category:{type:String, required:[true, "can't be blank"], index:true},
    subCategory:{type:String},
    price:{type:Number, required:[true, "can't be blank"]},
    countLeft:{type:Number, required:[true, "can't be blank"]},
    seller:{
        sellerId:{type:String, required:true},
        sellerDetails:{type:String}
    },
    location:{
        locationId:{type:String},
        locationDetails:String
    }
});
schema.plugin(uniqueValidator, {message: 'is already taken.'});
var Inventory = mongoose.model('Inventory', schema);

async function createInventory(body){
    // account = new Account(body)
    try {
        let inventory = await Inventory.create(body)   
        return inventory
    } catch (error) {
        throw new Error(error)
    }
}

async function getProducts(idList){
    // get the products using the ids from inventory table
}

module.exports = {
    createInventory,
    getProducts
}
