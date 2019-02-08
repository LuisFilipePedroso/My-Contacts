import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addContact } from '../actions/contacts'

class App extends Component {
  state = {
    name: ''
  }

  handleInputChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  addUser = () => {
    const { dispatch } = this.props

    const contact = {
      name: this.state.name
    }

    dispatch(addContact(contact))
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          name="name"
          required
          onChange={this.handleInputChange}
          value={this.state.name}/>
        <button onClick={this.addUser}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = ({ contacts }) => {
  console.log(contacts)

  return {
    contacts
  }
};

export default connect(mapStateToProps)(App);
