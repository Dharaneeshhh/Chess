import React, { useState } from 'react';
import { Panel } from 'rsuite';
import EnrollmentPopup from './popup';

const Cards = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleCourseClick = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
    
    return (
        <div>
            <Panel header={props.name2} shaded style={{ width: '300px', marginBottom: '30px' }}>
                <span onClick={handleCourseClick}>{props.name}</span>
                {showPopup && <EnrollmentPopup onClose={handleClosePopup} />}
            </Panel>
        </div>
    );
};

export default Cards;
