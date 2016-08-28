import React, { PropTypes, Component } from 'react';

import KudoFormContainer from './KudoFormContainer.jsx';
import KudosListPresentational from '../presentational/KudosListPresentational.jsx';
import KudosService from '../services/KudosService';

class KudosListPage extends Component {
  constructor(props) {
    // This passes props that were passed to this compnent to its parent constructor (Component);
    super(props);

    // Sets a default state of the component, which is used in the render() function.
    this.state = {
      kudos: [] // Empty list of kudos, because we have to wait for the AJAX call response to get it.
    };
  }

  findKudos = () => {
    new KudosService().findKudos() // Get kudos via AJAX call from the database.
    .then((kudos) => {
      // Every time setState() is called, it calls the render() function again.
      this.setState({ kudos });
    });
  }

  onKudoDeleteClick = (kudoId) => {
    new KudosService().deleteKudo(kudoId)
      .then(this.findKudos); // Refreshes a list of kudos after a kudo was deleted.
  }

  // componentDidMount() is a lifecycle function of a regular React component.
  // It's called after the initial rendering is done. More here:
  // https://facebook.github.io/react/docs/component-specs.html
  componentDidMount() {
    this.findKudos(); // Make AJAX call to get kudos from the server.
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
