import React from "react";
import PropTypes from "prop-types";
import {formatPrice} from '../helpers'

class Fish extends React.Component{
    static propTypes = {
        details: PropTypes.shape({
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        }),
        addToOrder: PropTypes.func.isRequired
    };

    render(){
        const {name, price, status, desc, image} = this.props.details
        const isAvailable = status === 'available'
        return(
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                {name}
                <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button 
                disabled={!isAvailable}
                onClick={() => this.props.addToOrder(this.props.index)}
                >
                {isAvailable? 'Add To Cart' : 'SOLD OUT!'}
                </button>
            </li>
        )

    }
}

export default Fish;