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
}
