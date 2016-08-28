import superagent from 'superagent';

export default class KudosService {
  postKudo(kudo) {
    return new Promise((resolve, reject) => {
      superagent
       .post('/api/kudos')
       .send(kudo)
       .set('Accept', 'application/json')
       .end(function(err, res) {
         if (err) return reject(err);
         resolve(res.body);
       });
    })
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

  deleteKudo(kudoId) {
    return new Promise((resolve, reject) => {
      superagent
       .del(`/api/kudos/${kudoId}`)
       .end(function(err, res) {
         if (err) return reject(err);
         resolve(res.body);
       });
    });
  }
}
