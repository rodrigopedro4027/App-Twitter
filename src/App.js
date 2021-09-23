import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { FaSearch } from 'react-icons/fa';

firebase.initializeApp({
  apiKey: "AIzaSyBqbA5n12A37rilxcYAgbtZxqgF_cuAPYk",
  authDomain: "projeto-1-484a9.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }



  render() {
    let iconStyles = { color: "black", fontSize: "1.9em" , opacity: "0.3"};
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div className="nav">
            <div className="pesquisar">
              <input type="text" placeholder="Pesquisar por #hashtags..." />
              <div className="icone" type="submit"><FaSearch size={20} style={iconStyles}/></div>
            </div>
            <div className="btn" onClick={() => firebase.auth().signOut()}>Sair</div>
            <h1 className="bemvindo">Seja bem-vindo(a) <br/>{firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
            </div>
            <h2 className="titulo2">Dashboard de uso de hashtags</h2>
            <div className="as">
            </div>

            <h2 className="titulo3">Hashtags salvas</h2>
            <div className="as1">
            </div>
            
          </span>
          
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App
