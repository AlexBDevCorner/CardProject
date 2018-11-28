const objectSort = require('./utils/objectSort')

const prepareParamsForSignature = ({ oauthHeaders, data }) => {
    
    const sortedHeaderParams = objectSort({ ...oauthHeaders, ...data })
    
    const paramArray = []
    
    for (let k in sortedHeaderParams) {
		  paramArray.push(k + '=' + encodeURIComponent(sortedHeaderParams[k]))
    }
    
	return paramArray.join('&')
}

module.exports = prepareParamsForSignature

