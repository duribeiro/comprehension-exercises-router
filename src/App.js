import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    const user = {
      username: 'joão',
      password: 12374,
    }
    return (
      <BrowserRouter>
        <Switch>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Users">Users</Link>
        <Link to="/StrictAccess">StrictAccess</Link>
        <Route
          path="/Users"
          render={(props) =>
            <Users {...props}
              greetingsMessage="Good Morning"
            />}
        />
        <Route 
          path="/StrictAccess" 
          render={() =>
          <StrictAccess user={user} />}
        />
        <Route path="/About" component={About} />
        <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
