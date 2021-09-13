import React from 'react';

import {
    Card,
    CardContent,
} from '@material-ui/core';


import './Card.css';

const CardList = ({list}) => {

    const handleCardClick = () => {
        console.log(list)
    }

    const renderCards = list => {
        console.log(list.length)
        if (list.length !== 0) {
            list.map((entry, idx) => {
                return (
                    <Card onClick={handleCardClick} className="card">
                        <CardContent>
                            <a href={entry}>
                                {idx}
                            </a>
                        </CardContent>
                    </Card>
                )
            })
        } else {
            return (
                <div>
                    fuck
                </div>
            )
        }
    }

    return (
        <div className="container">
            {renderCards(list)}
        </div>
    )
};

export default CardList;