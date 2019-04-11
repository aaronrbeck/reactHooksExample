import React, { Component } from 'react';

class StateForm extends Component {
  state = {
     text1: '',
     text2: '',
  }
  handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
  }
  render() {
    return (
      <>
        <form>
          <input type="text" name="text1" onChange={this.handleChange} placeholder="Text 1"/>
          <input type="text" onChange={(event) => this.setState({text2: event.target.value})} placeholder="Text 2"/>
        </form>
      </>
    );
  }
}
export default StateForm;