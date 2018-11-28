const crypto = require('crypto')

const oauthPercentEncode = require('./utils/oauthPercentEncode')
const prepareParamsForSignature = require('./prepareParamsForSignature')

const createSignature = ({ tokens, method, path, data, oauthHeaders }) => {

    const paramString = prepareParamsForSignature({ oauthHeaders, data })

    const str = method + '&' + oauthPercentEncode(path) + '&' + oauthPercentEncode(paramString)
   
    const signingKeys = oauthPercentEncode(tokens.appSecret) + '&' + oauthPercentEncode(tokens.accessTokenSecret)

    const hmac = crypto.createHmac('sha1', signingKeys)
	hmac.update(str)
    var signature = hmac.digest('base64')

    return signature
}

module.exports = createSignature