const fetch = require("node-fetch")

const config = require("../config.json")

const createOauthHeader = require("../auth/createOauthHeader")

const executeRequest = ({ tokens, method, path, data }) => {

    const uri = config.baseUrl + path

    const oauthHeader = createOauthHeader({
        tokens,
        method,
        path : uri,
        data      
    })

    const headers = {
        Authorization : oauthHeader
    }
    
    return fetch(uri, { headers : headers }).catch(err => console.log(err))
}

module.exports = executeRequest