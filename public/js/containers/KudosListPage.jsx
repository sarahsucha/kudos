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

  onKudoDeleteClick = (kudoId) => {
    new KudosService().deleteKudo(kudoId)
      .then(this.findKudos);
  }

  componentDidMount() {
    this.findKudos();
  }

  render() {
    return (
      <div>
        <KudosListPresentational
          kudos={this.state.kudos}
          onKudoDeleteClick={this.onKudoDeleteClick}
        />
        <KudoFormContainer findKudos={this.findKudos} />
      </div>
    );
  }
}

export default KudosListPage;
