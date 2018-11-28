import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
    }
  }
  fetchUsers() {
    // Where we're fetching data from
    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=2000`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
          error: null,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    
    
      <h1>Random User</h1>
      // Display a message if we encounter an error
      {error ? <p>{error.message}</p> : null}
      // Here's our data check
      {!isLoading ? (
        users.map(user => {
          const { username, name, email } = user;
          return (
            <div key={username}>
              <p>Name: {name}</p>
              <p>Email Address: {email}</p>
              <hr />
            </div>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
  }
}

export default App;
