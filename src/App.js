import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkbox from './components/checkbox/checkbox';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  handleToggle = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  handleSubmit = event => {
    alert(`The value of the checkbox was: ${this.state.isChecked ? 'checked' : 'unchecked'}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Babylon Programming Test</h1>
        </header>
        <p className="App-intro">

        <form onSubmit={this.handleSubmit}>
          <Checkbox
            label="My Checkbox"
            isChecked={this.state.isChecked}
            onToggle={this.handleToggle}
          />

          <br />

          <input type="submit" value="Submit"/>
        </form>
        </p>
      </div>
    );
  }
}

export default App;
