import React, { PropTypes, Component } from 'react';

import KudosService from '../services/KudosService';

class KudoFormContainer extends Component {
  constructor(props) {
    super(props); // Passes props to the parent class - Component.
    this.state = {
      name_from: '',
      name_to: '',
      description: ''
    };
    this.kudosService = new KudosService();
  }

  // It's called after the form is submitted.
  handleSubmit = (e) => {
    const { findKudos } = this.props;

    // Without this it would do a regular POST call, not AJAX.
    // e.preventDefault() prevents default processing of the form.
    e.preventDefault();

    // Takes the actual state (kudo form) and sends it to the server.
    this.kudosService.postKudo(this.state)
      .then((kudo) => {
        findKudos(); // Refreshes kudos after a new kudo was added.
      })
  }

  render() {
    console.log('-----------------RENDER KUDO FORM---------------------------');
    console.log(this.state);

    // The line below is equivalent of this:
    // const name_from = this.state.name_from;
    // const name_to = this.state.name_to;
    // const description = this.state.description;
    const { name_from, name_to, description } = this.state;

    // this.setState({name_from: e.target.value})} is called every time a user
    // changes something in the name_from input field. It saves a new value
    // to the state of the component and everytime it happens the render()
    // function is called again.

    return (
      <div className="main newKudo" id="newKudoForm">
        <h2>add a description</h2>
        <form action="/api/kudos" method="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="name_from">From:</label>
          <input type="text" name="name_from" id="name_from" required value={name_from}
            onChange={(e) => { this.setState({name_from: e.target.value})}} />

          <label htmlFor="name_to">To:</label>
          <input type="text" name="name_to" id="name_to" required value={name_to}
            onChange={(e) => { this.setState({name_to: e.target.value})}} />

          <label htmlFor="description">Kudo:</label>
          <textarea name="description" id="description" required value={description}
            onChange={(e) => { this.setState({description: e.target.value})}} />

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  };
};

KudoFormContainer.propTypes = {
  findKudos: PropTypes.func.isRequired,
}

export default KudoFormContainer;
