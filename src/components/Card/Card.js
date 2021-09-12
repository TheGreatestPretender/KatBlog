import React from 'react';
import './Card.css';

const Card = ({list}) => {
    return (
        <div className="container">
            {
                list.map(entry => {
                    return (
                        <>
                            {entry} <br />
                        </>
                    )
                })
            }
        </div>
    )
};

export default Card;