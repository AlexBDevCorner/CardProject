const createRequest = require('../request')
const executeRequest = require('../executeRequest')

const secrets = require("../../secret.json")

const getProductData = (productId, data = {}) => {
    
    const getProductData = createRequest({
        tokens : secrets,
        method : 'GET',
        path : `products/${productId}`,
        data
    })
    
    return executeRequest(getProductData)
}

module.exports = getProductData