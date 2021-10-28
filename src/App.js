import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { FaSearch } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi';
import { BsHeartFill } from 'react-icons/bs';
import { HiEmojiSad } from 'react-icons/hi';


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
      //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
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
    let iconStyles2 = { color: "white", fontSize: "1.9em" };
  console.log("icon")
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div className="nav">
            <div className="pesquisar">
              <input type="text" placeholder="Pesquisar por #hashtags..." />
              <div className="icone" type="submit"><FaSearch size={20} style={iconStyles}/></div>
              <div className="icone1" ><FiSettings size={28} style={iconStyles2}/></div>
            </div>
            <div className="btn" onClick={() => firebase.auth().signOut()}>Sair</div>
            <h1 className="bemvindo">Seja bem-vindo(a) <br/>{firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
            </div>
            <div className="tecnologia"></div>
            <ul>
            <li className="titulo2">#AI</li>
            <li className="hstg1">#IBMCloud</li>
            <li className="hstg2">#UiDesign</li>
            </ul>
            <div className="as">
              <div className="tweet1">
                <div className="positivo"style={{color: "#df235e", right:"1", marginTop:"20px", marginLeft:"500px", position: "absolute"}}><BsHeartFill size={20}/></div>
                <div className="perfil"></div>
                <p className="s1"><b>Pessoa1</b><br/>@pessoa1</p>
                
                <p className="t1">Lorem ipsum dolor sit amet, consectetur <b>legal!</b> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <b>#AI</b> #Twitterfuture</p>
              </div>

              <div className="tweet2">
                <div className="perfil1"></div>
                <div className="positivo" style={{color: "#df235e", right:"1", marginTop:"20px", marginLeft:"500px", position: "absolute"}}><BsHeartFill size={20}/></div>
                <p className="s2"><b>Pessoa2</b><br/>@pessoa2</p>
                <p className="t2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <b>muito bom</b> esta <b>#AI</b> incididunt ut labore et dolore magna aliqua.</p>
              </div>

              <div className="tweet3">
                <div className="perfil2"></div>
                <div className="positivo" style={{color: "#faa52f", right:"1", marginTop:"20px", marginLeft:"500px", position: "absolute"}}><HiEmojiSad size={20}/></div>
                <p className="s3"><b>Pessoa3</b><br/>@pessoa3</p>
                <p className="t3"><b>Não gostei muito</b>  consectetur adipiscing elit, sed do <b>#AI</b> tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>

            <h2 className="titulo3"> Salvas</h2>
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
