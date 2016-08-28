import superagent from 'superagent';

export default class KudosService {
  postKudo(kudo) {
    superagent
     .post('/api/kudos')
     .send(kudo)
     .set('Accept', 'application/json')
     .end(function(err, res) {
       if (err || !res.ok) {
         console.log('Oh no! error');
       } else {
         console.log('yay got ' + JSON.stringify(res.body));
       }
     });
  }

  findKudos(searchParams = {}) {
    return new Promise((resolve, reject) => {
      superagent
       .get('/api/kudos')
       .query(searchParams)
       .set('Accept', 'application/json')
       .end(function(err, res) {
         if (err) return reject(err);
         resolve(res.body);
       });
    })
  }
}
