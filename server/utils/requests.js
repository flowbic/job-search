const request = require('request');

module.exports = {
    get: async (url, headers) => {
        return new Promise(function (resolve, reject) {
            request({
                headers,
                url,
                method: 'GET'
            }, function (err, res) {
                if (err) {
                    reject(err)
                } else {
                    data = JSON.parse(res.body)
                    resolve(data)
                }
            })
        })
    }
}


const getRelevant = (jobs) => {
    let jobArr = jobs.hits
    jobArr.filter(skill => skill.label === 'javascript')

}