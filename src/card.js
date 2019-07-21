import React from 'react';
import './card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.userName };
    }
    render() {
        return (
            <div className="card" style="width: auto">
                <img className="card-img-top" src="..." alt="Card" />
                <div className="card-body">
                    <p className="card-text">{"name"}</p>
                    <p className="card-text">{"short-description"}</p>
                </div>
            </div>
        );
    }
}

export default Card;