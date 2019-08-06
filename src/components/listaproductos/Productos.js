import React from 'react';
import './Productos.css';
import {list} from './list.json';
//import Tproducto from '../tarjetaproducto/Tproducto';

function handleClick(e) {
  e.preventDefault();
  alert('The link was clicked.');
}


class Productos extends React.Component {
  

     constructor() {
        super();
        this.state = {
          msg: "Lista de Productos",
          task: 4,
          list:list
        }
      }
 
      
  render() {

       const list =  this.state.list.map((list,i) => {
        return (
            <div className="col-md-2">
             <div className="card mt-4">
                <div className="card-header">
                  <h3>{list.producto}</h3>
                  
                </div>
                <div className="card-body text-center">
                    <img src={list.img} alt="img public" height="120" width="120"/>
                    <button onClick={(handleClick)}
                    type="button" className="btn btn-danger">Show more</button>
                    
                </div>
                
              </div>
              
            </div>
            
        )
    })
          
        return (

            <div className="pro">            
            <div className="container">
                <div className="row">
                    {list}
                </div>
            </div>
            </div>
        )

  }
}

export default Productos;