import React from 'react';
import './Board.css';
import './cards.js';
import Card from './card.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.userName };
  }


  render() {
    let Cartas = this.cards.map ((card)=> {
      return (
        <Card />
      )
    })
    return (
      <div className="board-container">
        <h1 id="usernameid"> {this.state.name}, aqui tienes tus resultados: </h1>
        
       
        </div>
        )
      }
    }
    
    
    export default Board;
