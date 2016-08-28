const KudosDbAdapter = require('../adapters/db/KudosDbAdapter');

class KudosService {
  createKudo(kudo) {
    return new KudosDbAdapter().create(kudo);
  }

  findKudos(searchParams) {
    return new KudosDbAdapter().findAll(searchParams);
  }
}

module.exports = KudosService;
