import React from 'react';
import avatar from '../avatar.png';

const Header = (props) => {
    return (
        <>
        <br/> 
            <h1 style={{display: 'flex', justifyContent: 'flex-end'}}>
                {props.children} 
            <img 
                style={{
                    height:'100px', 
                    marginLeft: '14px',
                    marginTop: '-25px', 
                    width:'98px', 
                    borderRadius:'90px' }} 
                alt='Avatar' 
                src={avatar} />
            </h1>
        </>
    )
};

export default Header;