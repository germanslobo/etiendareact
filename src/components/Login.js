import React from 'react';
import fire from '../config/fire';
import Background from '../images/login-fondo.jpg';


var sectionStyle = {
  textAlign: "center",
  fontSize:"30px",
  color:"yellow",
  width: "100%",
  height: "5000px",
  backgroundImage: "url(" +  Background  + ")"
  };


class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      mensaje: "Test Constructor",
      ntareas: 4
    }
  }

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());        
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        document.getElementById('userok').innerHTML='1';
      })
      .catch((err) => {
        document.getElementById('mensaje').innerHTML=
        'Error: email is badly formatted or user does not exist';

      })
  }

  render() {
    
    return (      
      <div style={ sectionStyle }>         
        <div>
          <div>Email</div>
          <input style={{fontSize:'20px'}} id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input style={{fontSize:'20px'}} id="password" placeholder="Enter Password.." type="text"/>
        </div>
        <button style={{margin: '10px', fontSize:'20px'}}
        onClick={this.login}>Login</button>
        <button style={{margin: '10px', fontSize:'20px'}}
        onClick={this.signUp}>Sign Up</button>
        <p id='mensaje'></p>
        
        </div>         
    )
  }
  
}

export default Login;