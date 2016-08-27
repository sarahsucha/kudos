import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './presentational/App.jsx'; // ./ means to current folder
import KudosListPage from './containers/KudosListPage.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={KudosListPage} />
      <Route path="/kudos" component={KudosListPage} />
    </Route>
  </Router>
), document.getElementById('main'));

// <Route path="kudos/edit/:kudoId" component={KudosEditPage}/>
// <Route path="*" component={NotFoundPage}/>
