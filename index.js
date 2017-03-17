module.exports = function (query, vars) {
        return (request) => {
            const graphBody = { query: query, variables: vars }
            return request
                .set('Content-Type', 'application/json')
                .send(graphBody)
        }
    }
