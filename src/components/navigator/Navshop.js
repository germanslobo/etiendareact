import React from 'react';
import './Navshop.css';




class Navshop extends React.Component {

    
  render() {

    return (
      
      <nav className= "navbar navbar-blue bg-dark">
      <a href="/#" className= "text-white" >
      Best food products
      <spam className="badge badge-pill badge-light ml-2">
        2
      </spam>
      
      </a>
      <button type="button" className="btn btn-danger">Info</button>
      <button type="button" className="btn btn-primary">
       Cart<span className="badge badge-pill badge-light ml-2">7</span></button>
      <button type="button" className="btn btn-warning">Total</button>
     
      
      </nav>

    )
  }
}

export default Navshop;