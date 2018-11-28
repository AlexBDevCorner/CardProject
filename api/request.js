const createRequest = request => {
    return {
        tokens : request.tokens,
        method : request.method,
        path : request.path,
        data : request.data || ''
    }
}

module.exports = createRequest