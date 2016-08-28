const pg = require('pg');
const config = require('config');

const databaseConfig = config.get('database');

class KudosDbAdapter {
  create = (kudo) => {
    console.log('----------------KudosDbAdapter----------------------------');
    console.log(JSON.stringify(kudo, null, 4));
    const { name_from, name_to, description } = kudo;
    return new Promise((resolve, reject) => {
      pg.connect(databaseConfig, (dbConnectionErr, client, done) => {
        if (dbConnectionErr) return reject(dbConnectionErr);
        const query = `
        INSERT INTO kudos(name_from, name_to, description) VALUES($1, $2, $3)`;
        const values = [name_from, name_to, description];
        return client.query(query, values, (err) => {
          done(); // Call `done()` to release the client back to the pool.
          if (err) return reject(err);
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
}

module.exports = KudosDbAdapter;
