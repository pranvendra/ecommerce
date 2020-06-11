const accountModel = require('../Models/Account')

async function createAccount(req){
    try {
        let acc = await accountModel.createAccount(req.body)
        return acc   
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createAccount
}