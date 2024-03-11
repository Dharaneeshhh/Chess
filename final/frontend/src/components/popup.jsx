// EnrollmentPopup.jsx

import React from 'react';

const EnrollmentPopup = ({ onClose }) => {
  return (
    <div className="enrollment-popup">
      <div className="popup-content">
        <h2>Course Enrolled</h2>
        <p>You have successfully enrolled in this course.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EnrollmentPopup;
