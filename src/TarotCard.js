import React from 'react';
import cardBack from './backCardImg.png';
import './TarotCard.css';


class TarotCard extends React.Component {

    render() {
        return (<div>
            {this.props.shouldBeShowed ?
                <div>
                    <img src={this.props.image} className="card-flip" alt={this.props.description} />
                    <p className="card-description" >
                        <b>
                            {this.props.title}
                        </b>
                        {this.props.description}
                    </p>
                </div>
                :
                <img src={cardBack} className="card-hidden" alt="hidden card"/>}
        </div>)
    }
}

export default TarotCard