const KudosService = require('../services/KudosService');

class KudosController {
  fetchKudos(req, res, next) { // this is an anonymous function in egmascript 6
    const kudos = [
      {
        name_from: 'Sarah',
        name_to: 'Dan',
        created_on: '2008-09-22T14:01:54.9571247Z',
        text: 'Awesome, you did the dishes!'
      },
      {
        name_from: 'Dan',
        name_to: 'Sarah',
        created_on: '2008-09-22T14:01:54.9571247Z',
        text: 'I appreciated your prefessional swearing skills tonight'
      }
    ];
    res.json(kudos);
  },
  async createKudo(req, res, next) {
    try {
      const kudo = await new KudosService().createKudo(req.body);
      res.status(201).send(kudo); // It sets HTTP status to 201 and returns JSON.
    } catch (err) {
      next(err);
    }
  }
};

module.exports = new KudosController();
