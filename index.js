const mkmApi = require('./api/mkmApi')

const stockList = mkmApi.product
    .getProductData('364305')
    .then(res => res.json())
    .then(res => console.log(res))