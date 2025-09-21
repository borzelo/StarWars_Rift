const axios = require('axios')

class StarWarsService {
    static async getAll(){
        const charachters = await axios.get('https://swapi.py4e.com/api/people')
        return charachters.data.results
    }
}

module.exports = StarWarsService