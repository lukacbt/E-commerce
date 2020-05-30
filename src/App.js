import React from 'react';
import './App.css';
import Homepage from "./Pages/Homepage/Homepage"
import { Switch, Route, Redirect } from "react-router-dom"
import Shop from './Pages/Shop/Shop';
import Header from './Components/Header/Header';
import SignInPage from './Pages/SignInPage/SignInPage';
import { auth, createUserProfileDocument } from "./Firebase/FirebaseUtils"
import { connect } from "react-redux"
import { setCurrentUser } from "./Redux/user/userActions"
import Checkout from './Pages/Checkout/Checkout';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInPage />)} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = {
  setCurrentUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);