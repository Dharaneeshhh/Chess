// CoursePDF.js
import React from 'react';

const CoursePDF = ({ course }) => {
  const generatePDFURL = () => {
    // Construct the URL for the PDF file
    const pdfURL = `${process.env.PUBLIC_URL}/assets/images/Chess-opening-fundamentals.pdf`;

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = pdfURL;
    a.download = `${course}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <button onClick={generatePDFURL}>Generate PDF for {course}</button>
    </div>
  );
};

export default CoursePDF;
