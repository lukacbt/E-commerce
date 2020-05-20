import React, { Component } from 'react';
import './App.css';
import Homepage from "./Pages/Homepage/Homepage"
import { Switch, Route } from "react-router-dom"
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInPage from './Pages/SignInPage/SignInPage';
import { auth } from "./Firebase/FirebaseUtils"

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
