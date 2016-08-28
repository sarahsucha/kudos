import React, { PropTypes, Component } from 'react';

import KudoFormContainer from './KudoFormContainer.jsx';
import KudosListPresentational from '../presentational/KudosListPresentational.jsx';
import KudosService from '../services/KudosService';

// Usage
// <KudoFormContainer />
// <KudosListPresentational kudos={kudos} />

class KudosListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kudos: []
    };
  }

  componentDidMount() {
    new KudosService().findKudos()
    .then((kudos) => {
      console.log('----------------componentDidMount----------------------------');
      console.log(JSON.stringify(kudos, null, 4));
      this.setState({ kudos });
    });
  }

  render() {
    return (
      <div>
        <KudosListPresentational kudos={this.state.kudos} />
        <KudoFormContainer />
      </div>
    );
  }
}

export default KudosListPage;
