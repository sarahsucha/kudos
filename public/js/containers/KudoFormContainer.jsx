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
  handleSubmit = (e) => {
    console.log('handleSubmit');
    e.preventDefault();
    this.kudosService.postKudo(this.state);
  }
  render() {
    console.log('-----------------RENDER---------------------------');
    console.log(this.state);
    const { name_from, name_to, description } = this.state;
    // THe line above is equivalent of this:
    // const name_from = this.state.name_from;
    // const name_to = this.state.name_to;
    // const description = this.state.description;
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

export default KudoFormContainer;
