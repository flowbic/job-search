const { get } = require('../utils/requests')
const example = require('../example.json')
require('dotenv').config()


module.exports = class Platsbanken {
    constructor() {
        this.search = "/search?occupation-field=apaJ_2ja_LuF"
        this.searchWords = []
        this.headers = {
            "accept": "application/json",
            "api-key": process.env.PLATSBANKEN_API
        }
    }
    set searchWords(searchWords) {
        this._searchWords = searchWords

    }
    get searchWords() {
        return this._searchWords;
    }

    linkWords() {
        return `${"&q=" + this.searchWords.join('%20')}` || ""
    }
    async jobbdata() {
        let url = process.env.PLATSBANKEN_URL += this.search += this.linkWords()
        data = await get(url, this.headers)
        console.log(JSON.stringify(data.hits[0]))
    }
    async getJobById(id) {
        let idSearch = "/ad/" += id
        let url = process.env.PLATSBANKEN_URL += idSearch
        let data = await get(url, this.headers)
        console.log(JSON.stringify(data))
    }
    getJobData() {
        let data = example
        data.forEach(doc => {
            let a = {
                employer: doc.employer.name,
                url: doc.webpage_url,
                title: doc.headline,
                skills: {
                    required: doc.must_have.skills,
                    bonus: doc.nice_to_have
                },
                text: doc.description.text,
                id: doc.id,
                deadline: doc.application_deadline,
                duration: doc.duration.label,
                scope: doc.scope_of_work,
                platform: "platsbanken"
            }
        });
    }
}