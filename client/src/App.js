import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { callApi } from './actions/apiActions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: 'Not Loaded'
    };
  }

  componentDidMount() {
    this.props.callApi();
  }

  render() {
    const { response } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{response || this.state.response}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    response: state.api.response
  };
};

export default connect(mapStateToProps, {
  callApi
})(App);
