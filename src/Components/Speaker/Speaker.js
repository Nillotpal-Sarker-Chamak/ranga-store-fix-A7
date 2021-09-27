import React from 'react';
import './Speaker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Speaker = (props) => {
    const { name, country, salary, job, age, fig } = props.speaker;
    const buttonIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="speaker">
            <div >
                <img className="image" src={fig} alt="" />
                <h3>Name:{name}</h3>
                <h5>Country:{country}</h5>
                <h3>Job:{job}</h3>
                <h4>Age:{age}</h4>
                <h4>Salary:{salary}</h4>
                <button onClick={() => props.addToCart(props.speaker)} className="button">{buttonIcon} Add to Favourite List</button>
            </div>
        </div>
    );
};

export default Speaker;