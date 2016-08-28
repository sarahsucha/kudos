const pg = require('pg');
const config = require('config');

const databaseConfig = config.get('database');

class KudosDbAdapter {
  create = (kudo) => {
    const { name_from, name_to, description } = kudo;
    return new Promise((resolve, reject) => {
      pg.connect(databaseConfig, (dbConnectionErr, client, done) => {
        if (dbConnectionErr) return reject(dbConnectionErr);
        const sql = `
        INSERT INTO kudos(name_from, name_to, description) VALUES($1, $2, $3) RETURNING kudo_id`;
        const values = [name_from, name_to, description];
        const query = client.query(sql, values, (err, result) => {
          done(); // Call `done()` to release the client back to the pool.
          if (err) return reject(err);
          kudo.kudo_id = result.rows[0].kudo_id; // TODO This is mutating an object, which you don't want to do.
          return resolve(kudo);
        });
      });
    });
  }

  findAll = (searchParams) => {
    const { name_from, name_to } = searchParams;
    return new Promise((resolve, reject) => {
      pg.connect(databaseConfig, (dbConnectionErr, client, done) => {
        if (dbConnectionErr) return reject(dbConnectionErr);
        const query = 'SELECT * FROM kudos';
        // const query = 'SELECT * FROM kudos WHERE $1::text as name_from OR $2::text as name_to';
        // const values = [name_from, name_to];
        const values = [];
        return client.query(query, values, (err, result) => {
          done(); // Call `done()` to release the client back to the pool.
          if (err) return reject(err);
          return resolve(result.rows);
        });
      });
    });
  }

  remove = (kudoId) => {
    return new Promise((resolve, reject) => {
      if (!kudoId) return reject(new Error('kudoId is required'));
      pg.connect(databaseConfig, (dbConnectionErr, client, done) => {
        if (dbConnectionErr) return reject(dbConnectionErr);
        const sql = 'DELETE FROM kudos WHERE kudo_id = $1';
        const values = [kudoId];
        const query = client.query(sql, values, (err, result) => {
          done(); // Call `done()` to release the client back to the pool.
          if (err) return reject(err);
          return resolve();
        });
      });
    });
  }
}

module.exports = KudosDbAdapter;
