import React from 'react';
import fire from '../config/fire';
import "bootstrap/dist/css/bootstrap.min.css";
import Backgroundmain from '../images/main-fondo.jpg';

var sectionStyle = {
  textAlign: "center",
  fontSize:"30px",
  color:"yellow",
  width: "100%",
  height: "200px",
  backgroundImage: "url(" +  Backgroundmain  + ")"
  };

class Home extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div style={ sectionStyle }>
      <div style={{textAlign: 'center'}}>
        <h1>Welcome Super Market</h1>
        <button onClick = {this.logout}>Logout</button>              
      </div>
      </div>
      
    )
  }
}

export default Home;