import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewUser from './NewUser'

class App extends Component {
  state = {
    name: ''
  }
  
  render() {
    return (
      <div className="App">
        <NewUser />
      </div>
    );
  }
}

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  }
};

export default connect(mapStateToProps)(App);
