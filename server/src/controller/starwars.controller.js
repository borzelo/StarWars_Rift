const StarWarsService = require("../service/starwars.service");

class StarWarsController {
  static async getAllCharachters(req, res) {
    try {
      const charachters = await StarWarsService.getAll();
      res.json(charachters);
    } catch (error) {
      res.status(500).json({ ok: false, error: error.message });
    }
  }
}

module.exports = StarWarsController;
