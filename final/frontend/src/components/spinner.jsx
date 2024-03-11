import React from 'react';
import { Loader } from 'rsuite';

const Spinner = () => {
    return (
        <div>
            <Loader inverse center content="wait"></Loader>
        </div>
    );
}

export default Spinner;
