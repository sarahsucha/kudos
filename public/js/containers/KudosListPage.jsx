import React, { PropTypes, Component } from 'react';

import KudoFormContainer from './KudoFormContainer.jsx';
import KudosListPresentational from '../presentational/KudosListPresentational.jsx';

// Usage
// <KudoFormContainer />
// <KudosListPresentational kudos={kudos} />

class KudosListPage extends Component {
  render() {
    return (
      <KudosListPresentational />
    );
  }
}

export default KudosListPage;
