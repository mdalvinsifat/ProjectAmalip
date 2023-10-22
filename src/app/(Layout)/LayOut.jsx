import React from 'react';
import Header from './Header';
import Fottar from './Fottar';

const LayOut = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Fottar></Fottar>
        </div>
    );
};

export default LayOut;