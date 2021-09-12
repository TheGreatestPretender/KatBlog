import React from 'react';

import {
    Card,
    CardContent,
} from '@material-ui/core';

import {getGitHubUser} from '../../utils/utils';

import './Card.css';

const CardList = ({list}) => {

    const handleCardClick = () => {
        const url = getGitHubUser('TheGreatestPretender')
    /*     window.location.href= 'https://www.google.com' */
    }

    return (
        <div className="container">
            {
                list.map((entry, idx) => {
                    return (
                        <Card key={idx} onClick={handleCardClick} style={{backgroundColor: '#4A7C59', marginLeft: '10px'}}>
                            <CardContent style={{color:'#FAF3DD'}}>
                                {entry} 
                            </CardContent>

                        </Card>
                    )
                })
            }
        </div>
    )
};

export default CardList;