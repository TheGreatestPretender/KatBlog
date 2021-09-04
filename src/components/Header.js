import React from 'react';

const Header = (props) => {
    return (
        <>
        <br/> 
            <h1 className={"line-1 anim-typewriter"}>
                {props.children}
            </h1>
        </>
    )
};

export default Header;