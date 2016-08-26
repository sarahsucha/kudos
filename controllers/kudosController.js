const pg = require('pg');

const config = {
 host: 'localhost',
 port: 5432,
 database: 'kudos',
 user: 'postgres',
 password: '',
 ssl: false,
};

class KudosController {
  fetchKudos(req, res) { // this is an anonymous function in egmascript 6
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
  }
};

module.exports = new KudosController();







const pg = require('pg');
// const config = 'postgres://cherryfic-admin:secretsecret@localhost/cherryfic';
// const conString = 'postgres://scfvlzzdvyzhcs:OPxz6mA4xM826wK1HbLI4orNti@ec2-54-243-248-181.compute-1.amazonaws.com:5432/d3gov2fkma94h4?sssl=require';

const config = {
 host: 'ec2-54-243-248-181.compute-1.amazonaws.com',
 port: 5432,
 database: 'd3gov2fkma94h4',
 user: 'scfvlzzdvyzhcs',
 password: 'OPxz6mA4xM826wK1HbLI4orNti',
 ssl: true,
};

const cities = [
 { name: 'San Francisco' },
 { name: 'Los Angeles' },
 { name: 'Chicago' },
 { name: 'Washington D.C.' },
 { name: 'San Diego' },
 { name: 'San Bernardino' },
 { name: 'Los Pedros' },
];

const citiesController = {
 findCities(req, res) {
   return res.json(cities);
   pg.connect(config, function(err, client, done) {
     if (err) return console.error('error fetching client from pool', err);
     client.query('SELECT * FROM cities', null, function(err, result) {
       if (err) return console.error('error running query', err);
       res.json(result.rows);
     });
   });
 },
};

module.exports = citiesController;
