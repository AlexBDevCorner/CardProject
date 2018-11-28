const crypto = require('crypto')

const createNonce = () => crypto.randomBytes(16).toString('hex')

module.exports = createNonce