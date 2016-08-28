const KudosService = require('../services/KudosService');

class KudosController {
  async findKudos(req, res, next) { // this is an anonymous function in egmascript 6
    try {
      const kudos = await new KudosService().findKudos(req.query);
      res.json(kudos);
    } catch (err) {
      next(err);
    }
  }

  async createKudo(req, res, next) {
    try {
      const kudo = await new KudosService().createKudo(req.body);
      res.status(201).send(kudo); // It sets HTTP status to 201 and returns JSON.
    } catch (err) {
      next(err);
    }
  }

  async removeKudo(req, res, next) {
    try {
      const kudo = await new KudosService().removeKudo(req.params.kudo_id);
      res.status(200).send();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = new KudosController();
