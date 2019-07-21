import React from 'react';
import './Home.css';
import HomeImage from './images/home-r.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.goToRegister = this.goToRegister.bind(this);
  }
  goToRegister() {
    this.props.onRegisterClick();
  }

  onChangeHandler(event) {

    this.setState({
      descripcion: event.target.value,
    });

  }



  render() {
    return (
      <div className="body-home font-sans" >

        <div className="main-text-container">
          <p> LA RUEDA DE LA <br></br> FORTUNA </p>
          <button onClick={this.goToRegister} type="button" className="btn btn-dark font-sans">CONOCER MI FUTURO</button>
        </div>
        <div className="right-img">
          <img src={HomeImage} alt="hand" />
        </div>
      </div>
    );
  }
}
export default Home;
