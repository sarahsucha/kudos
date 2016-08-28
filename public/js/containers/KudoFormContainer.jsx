import React, { PropTypes, Component } from 'react';

import KudosService from '../services/KudosService';

class KudoFormContainer extends Component {
  constructor(props) {
    super(props); // Passes props to the parent class - Component.
    this.state = {
      from: '',
      to: '',
      kudo: ''
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
    // const { from, to, kudo } = this.state;
    // THe line above is equivalent of this:
    // const from = this.state.from;
    // const to = this.state.to;
    // const kudo = this.state.kudo;
    return (
      <div className="main newKudo" id="newKudoForm">
        <h2>add a kudo</h2>
        <form action="/api/kudos" method="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="from">From:</label>
          <input type="text" name="from" id="from" required value={this.state.from}
            onChange={(e) => { this.setState({from: e.target.value})}} />

          <label htmlFor="to">To:</label>
          <input type="text" name="to" id="to" required value={this.state.to}
            onChange={(e) => { this.setState({to: e.target.value})}} />

          <label htmlFor="kudo">Kudo:</label>
          <textarea name="kudo" id="kudo" required value={this.state.kudo}
            onChange={(e) => { this.setState({kudo: e.target.value})}} />

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  };
};

export default KudoFormContainer;
