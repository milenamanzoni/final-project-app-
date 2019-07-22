import React from 'react';
import './Board.css';

import TarotCard from './TarotCard.js';
import barco from './images/3-elbarco.jpg';
import latigo from './images/11-ellatigo.jpg';
import aves from './images/12-lasaves.jpg';
import ninos from './images/13-losninos.jpg';
import zorra from './images/14-lazorra.jpg';
import estrellas from './images/16-lasestrellas.jpg';
import perro from './images/18-elperro.jpg';
import jardin from './images/20-eljardin.jpg';
import montana from './images/21-lamontana.jpg';
import camino from './images/22-elcamino.jpg';
import libros from './images/26-loslibros.jpg';
import carta from './images/27-lacarta.jpg';
import zingaro from './images/28-elzingaro.jpg';
import lirios from './images/30-loslirios.jpg';
import luna from './images/32-laluna.jpg';
import peces from './images/34-lospeces.jpg';


class Board extends React.Component {


  constructor(props) {

    super(props);
    this.state = {
      name: props.userName,
      isFlipped: false,
      listadoCartas: [
        { number: 3, title: "El Barco", description: " Las emociones, la energia que fluye naturalmente", image: barco },
        { number: 11, title: "El latigo", description: " Es una carta negativa que trae peleas y discusiones de tono muy fuerte con el entorno", image: latigo },
        { number: 12, title: "Las Aves", description: " Esta carta es negativa, determina nerviosismo, preocupaciones y ajetreos.", image: aves },
        { number: 13, title: "Los Ninos", description: " Esta carta es positiva y está indicando el hijo propio. Muestra un nuevo comienzo, una cosa pequeña o a una persona de naturaleza ingenua o infantil.", image: ninos },
        { number: 14, title: "La Zorra", description: " Esta carta es negativa y advierte todo lo relacionado con la falsedad, con los engaños, con la astucia y con las mentiras.", image: zorra },
        { number: 16, title: "Las Estrellas", description: " Es una carta positiva, augura el éxito en todas las cosas, propagando novedades importantes. Determina la intuición y la astrología.", image: estrellas },
        { number: 18, title: "El Perro", description: " Esta carta es positiva, representa la amistad, la presencia de alguien en quien se puede confiar. Augura premios, éxitos y victorias.", image: perro },
        { number: 20, title: "El Jardin", description: " Esta es una carta positiva y social, está representando al público, a la sociedad y a todos los lugares donde puede haber reuniones de personas.", image: jardin },
        { number: 21, title: "La Montana", description: " Esta es una carta negativa que anuncia un bloqueo que impide el desarrollo de las actividades.", image: montana },
        { number: 22, title: "El Camino", description: " Muestra la necesidad de tomar decisiones y la existencia de distintas soluciones y alternativas que se deberán escoger en el camino.", image: camino },
        { number: 26, title: "Los Libros", description: " Esta carta se refiere a algo que está oculto, un secreto que aún no ha podido salir a la luz", image: libros },
        { number: 27, title: "La Carta", description: " Esta carta es neutra, está subordinada a las que se encuentran junto a ella, anuncia una noticia que está en camino y que llegará muy pronto.", image: carta },
        { number: 28, title: "El Zingaro", description: " Esta es una carta neutra, subordinada a las cartas que la acompañan, representa al consultante si este es un hombre, por lo que se la considera una carta personal para hombres.", image: zingaro },
        { number: 30, title: "Los Lirios", description: " Esta es una carta positiva, simboliza la intimidad, la familia, la vida de hogar, la armonía y también la sexualidad.", image: lirios },
        { number: 32, title: "La Luna", description: " Esta carta muestra que se puede contar con el éxito, con el reconocimiento, la aprobación y el ascenso", image: luna },
        { number: 34, title: "Los Peces", description: " Es la carta positiva, que tiene el poder de modificar o dominar el valor de las cartas que se encuentran cerca, representa el dinero.", image: peces }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.hacerTirada();
  }
  handleClick(e) {
    e.preventDefault();

    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  hacerTirada() {

    let tirada = [];

    for (let i = 0; i < 5; i++) {
      let randomCard = this.getRandomCard();
      tirada.push(randomCard);
    }
    this.setState({
      listadoCartas: tirada
    });

  }

  getRandomCard() {
    let cartaRandom = this.state.listadoCartas[Math.floor(Math.random() * this.state.listadoCartas.length)];
    return cartaRandom;
  }

  render() {
    let cardList = this.state.listadoCartas.map((card) => {
      return (<TarotCard shouldBeShowed={this.state.isFlipped} title={card.title} image={card.image} key={card.number} description={card.description} />)
    })
    return (
      <div className="board-container">
        <h1 id="usernameid"> {this.state.name}, toca las cartas para saber tu resultado: </h1>
        <div onClick={this.handleClick} className="cards-container">

          {cardList}

        </div>
      </div>
    )
  }
}


export default Board;
