const createSignature = require('./createSignature')
const createNonce = require('./utils/createNonce')

const createOauthHeader = ({ tokens, method, path, data  }) => {

    //Creating object with necessary headers
    const oauthHeaders = {
        oauth_consumer_key : tokens.appToken,
        oauth_token : tokens.accessToken,
        oauth_timestamp : Math.floor(Date.now() / 1000),
        oauth_nonce : createNonce(),
        oauth_signature_method : "HMAC-SHA1",
        oauth_version : "1.0"
    }

    //Creating headers string
    let headers = `OAuth realm="${path}",`
    
    for (let key in oauthHeaders) {
        headers += key + '="' + oauthHeaders[key] + '",'
    }

    //generating Signature
    
    const signature = createSignature({ tokens, method, path, data, oauthHeaders })
    
    headers += `oauth_signature="${signature}"`
    //Signature
    
    return headers
}

module.exports = createOauthHeader