import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewUser from './NewUser'
import ContactsList from './ContactsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewUser />
        <ContactsList />
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
