import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'rsuite';

const Buttons = ({ name }) => {
    return (
        // <button appearence >{name}</button>
        <Button appearance="ghost">{name}</Button>  

        
    );
};


Buttons.propTypes = {
    name: PropTypes.string.isRequired
};


export default Buttons;
