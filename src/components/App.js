import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewUser from './NewUser'
import ContactsList from './ContactsList'

class App extends Component {
  state = {
    isOpen: true
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-success" onClick={this.handleButtonClick}>New User</button>
        {this.state.isOpen === true &&
          <NewUser />
        }
        <h3 className="d-flex justify-content-center title">My Contacts</h3>
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
