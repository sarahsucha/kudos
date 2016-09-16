const KudosDbAdapter = require('../adapters/db/KudosDbAdapter');

// A service can call multiple database tables from one function at once and
// it can also have logic that doesn't touch a database.
class KudosService {
  createKudo(kudo) {
    return new KudosDbAdapter().create(kudo);
  }

  findKudos(searchParams) {
    return new KudosDbAdapter().findAll(searchParams);
  }

  removeKudo(kudoId) {
    return new KudosDbAdapter().remove(kudoId);
  }
}

module.exports = KudosService;
