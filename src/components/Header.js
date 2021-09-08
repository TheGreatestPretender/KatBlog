import React from 'react';

const Header = (props) => {
    return (
        <>
        <br/> 
            <h1 style={{display: 'flex', justifyContent: 'center'}}>
                {props.children} 
            </h1>
        </>
    )
};

export default Header;