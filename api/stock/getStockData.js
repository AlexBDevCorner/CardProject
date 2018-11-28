const createRequest = require('../request')
const executeRequest = require('../executeRequest')

const secrets = require("../../secret.json")

const getStockData = (data = {}) => {
    
    const stockDataRequest = createRequest({
        tokens : secrets,
        method : 'GET',
        path : 'stock',
        data
    })
    
    return executeRequest(stockDataRequest)
}

module.exports = getStockData


