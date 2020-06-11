var uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose')
var schema = new mongoose.Schema({ 
    username:{type: String, lowercase: true, unique:true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, unique:true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    name:'string',
    phone:{
        countryCode:Number,
        phoneNumber:Number
    }
});
schema.plugin(uniqueValidator, {message: 'is already taken.'});
var Account = mongoose.model('Account', schema);

async function createAccount(body){
    // account = new Account(body)
    try {
        let account = await Account.create(body)   
        return account
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createAccount
}