const inventoryModel = require('../Models/Inventory')

async function addProducts(req){
    try {
        let acc = await inventoryModel.createInventory(req.body)
        return acc
    } catch (error) {
        throw new Error(error)
    }
}

async function getInventory(id){
    try {
        let inventory = inventoryModel.getProducts(idList)
        return inventory
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    addProducts,
    getInventory
}