import React from 'react';
import './Cart.css';
const Cart = (props) => {
    let [persons] = [props.personSelected];
    let total = 0;
    for (const person of persons) {
        total = total + person.salary;
    }
    return (
        <div className="cart">
            <h1>No of Person's Added:{persons.length}</h1>
            <h2>Total Cost:{total}</h2>
            <h1>Name:{persons.name}</h1>
            {
                persons.map(person => <li key={person.key}>{person.name}</li>)
            }
        </div>

    );
};

export default Cart;