import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {

  checkUser({ username, password }) {
    if (username === 'joão' && password === 1234 ) {
      return <p>Welcome {username}</p>
    }
    return (
      <div>
        {alert('Você não tem acesso')}
        <Redirect to="/" />
      </div>
    )
  }

  // checkUser() {
  //   return <p> Você não tem acesso</p>
  // }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>Access</h2>
        {this.checkUser(user)}
      </div>
    );
  }
}

export default StrictAccess;
