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

  findKudos = () => {
    new KudosService().findKudos()
    .then((kudos) => {
      this.setState({ kudos });
    });
  }

  componentDidMount() {
    this.findKudos();
  }

  render() {
    return (
      <div>
        <KudosListPresentational kudos={this.state.kudos} />
        <KudoFormContainer findKudos={this.findKudos} />
      </div>
    );
  }
}

export default KudosListPage;
