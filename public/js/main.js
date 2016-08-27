import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="kudos" component={KudosListPage}/>
    </Route>
  </Router>
), document.getElementById('main'))

// <Route path="kudos/edit/:kudoId" component={KudosEditPage}/>
// <Route path="*" component={NotFoundPage}/>
