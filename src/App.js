import React, { Component } from 'react';
import StateForm from './forms/StateForm'
import HooksForm from './forms/HooksForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <fieldset>
          <legend>State</legend>
          <StateForm />
        </fieldset>
        <fieldset>
          <legend>Hooks</legend>
          <HooksForm />
        </fieldset>
      </>
    );
  }
}

export default App;
