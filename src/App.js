import React from 'react';
import './App.css';
import Home from './Home.js';
import Register from './Register';
import Board from './Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'Home',

    };
  }



  goToBoard = (name) => {
    console.log("Going to Board");
    this.setState({
      currentSection: 'Board', 
      userName: name
    })
    this.goToSection();
  }
  goToRegister = () => {
    console.log("App component => GoToRegister");
    this.setState({
      currentSection: 'Register'
    });
    this.goToSection();
  }
  goToSection() {
    if (this.state.currentSection === 'Register') {
      return <Register onGoToBoardClick={this.goToBoard}/>;
    }else if (this.state.currentSection === 'Board'){
      return <Board userName={this.state.userName}/>;
    }
    return <Home onRegisterClick={this.goToRegister} />

  }

  render() {
    return (
 
      this.goToSection()
     
     

    );
  }
}

export default App;