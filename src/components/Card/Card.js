import React from 'react';
import './Card.css';

const Card = ({list}) => {
    return (
        <div className="container">
            <br/>
            {
                list.map((entry, idx) => {
                    return (
                        <div className="card" key={list[idx]}>
                            {entry}
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Card;