import React from 'react';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.goToBoard = this.goToBoard.bind(this);
  }

  goToBoard(){
    this.props.onGoToBoardClick(this.state.name);
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  render() {
    return (
      <div className="RegistroUsuario">
        <h1 className="font-sans titulo1">Pasado.</h1>
        <h1 className="font-sans titulo2">Presente.</h1>
        <h1 className="font-sans titulo3">Futuro.</h1>
        <h2 className="font-sans subtitulo">Esclarece tus dudas con respecto a un asunto especifico AHORA!</h2>
        <div className="input-group input-nombre">
          <input type="text" className="form-control" placeholder="Ingresa tu nombre..." aria-label="Ingresa tu nombre" aria-describedby="button-addon2" id="inputname"
          value={this.state.name} onChange={this.handleChange}>
          </input>
          
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.goToBoard}> Conoce las predicciones</button>
          </div>
        </div>
      </div>
    )
  }
}


export default Register;
