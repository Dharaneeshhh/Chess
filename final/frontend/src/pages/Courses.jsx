// import React, { useState } from 'react';
// import CustomNavbar from '../components/custom_navbar';
// import Cards from '../components/cards';
// import '../assets/css/courses.css';
// import EnrollmentPopup from '../components/popup';
// import CoursePDF from '../components/coursedownload';

// const Courses = () => {
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [pdfURL, setPDFURL] = useState(null);

//     const handleCourseClick = (course) => {
//       setSelectedCourse(course);
//       setShowPopup(true);
//     };
  
//     const handleClosePopup = () => {
//       setShowPopup(false);
//     };

//     const handlePDFGenerated = (pdfURL) => {
//       setPDFURL(pdfURL);
//     };
    
//     return (
//         <div>
//             <header>
//                 <CustomNavbar/>
//             </header>
//             <div className='course'>
//                 <div>
//                     <h1>Beginner</h1><br/>
//                     <Cards name={"Opening Principles"} onClick={() => handleCourseClick("Opening Principles")}/>
//                     <Cards name={"Winning the game"} onClick={() => handleCourseClick("Winning the game")}></Cards>
//                    <Cards name={"Capturing Pieces"} onClick={() => handleCourseClick("Capturing Pieces")}></Cards>
//                    <Cards name={"Finding checkmate"}onClick={() => handleCourseClick("Finding checkmate")}></Cards>
//                 </div>
//                 <div>
//                     <h1>
//                         Intermediate
//                     </h1><br/>
//                     <Cards name={"Make the most of your pieces"}></Cards>
//                    <Cards name={"Understanding endgames"}></Cards>
//                     <Cards name={"Winning tactics"}></Cards>
//                     <Cards name={"Forcing moves"}></Cards>
//                 </div>
//                 <div>
//                     <h1>
//                         Advanced
//                     </h1><br/>
//                     <Cards name={"Key openings"}></Cards>
//                     <Cards name={"Choosing the best moves"}></Cards>
//                     <Cards name={"Activating your pieces"}></Cards>
//                     <Cards name={"Attacking the King"}></Cards>
//                 </div>
//             </div>
//             {showPopup && <EnrollmentPopup onClose={handleClosePopup} />}
//             {pdfURL && <a href={pdfURL} download={`${selectedCourse}.pdf`}>Download PDF for {selectedCourse}</a>}
//             {selectedCourse && <CoursePDF course={selectedCourse} onPDFGenerated={handlePDFGenerated} />}
//         </div>
//     );
// };

// export default Courses;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CustomNavbar from '../components/custom_navbar';
// import Cards from '../components/cards';
// import '../assets/css/courses.css';
// import EnrollmentPopup from '../components/popup';
// import CoursePDF from '../components/coursedownload';
// import c_pdf from '../assets/images/Chess-opening-fundamentals.pdf';

// const Courses = () => {
//     const [courses, setCourses] = useState([]);
//     const [showPopup, setShowPopup] = useState(false);
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [pdfURL, setPDFURL] = useState(null);
    

//     useEffect(() => {
//         const authToken = localStorage.getItem("token");
//         console.log("hiiii"+authToken)
//         const headers = { Authorization: `Bearer ${authToken}` };
//         axios.get('http://localhost:8181/course/courselist', {headers})
//             .then(response => {
//                 setCourses(response.data);
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching courses:', error);
//             });
//     }, []);

//     const handleCourseClick = (course) => {
//         setSelectedCourse(course);
//         setShowPopup(true);
//     };

//     const handleClosePopup = () => {
//         setShowPopup(false);
//     };

//     const handlePDFGenerated = (pdfURL) => {
//         setPDFURL(pdfURL);
//     };
    
//     return (
//         <div>
//             <header>
//                 <CustomNavbar/>
//             </header>
//             <div className='course'>
//                 <div>
//                     <h1>Admin: Course Management</h1><br/>
//                     {courses.map(course => (
//                         <div key={course.id}>
//                             <a href={course.content} download >
//                             <span>{course.courseName}</span>
//                             </a>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {showPopup && <EnrollmentPopup onClose={handleClosePopup} />}
//             {pdfURL && <a href={pdfURL} download={`${selectedCourse.name}.pdf`}>Download PDF for {selectedCourse.name}</a>}
//             {selectedCourse && <CoursePDF course={selectedCourse} onPDFGenerated={handlePDFGenerated} />}
//         </div>
//     );
// };

// export default Courses;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from '../components/custom_navbar';
import '../assets/css/courses.css';
import EnrollmentPopup from '../components/popup';
import CoursePDF from '../components/coursedownload';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [pdfURL, setPDFURL] = useState(null);
    
    useEffect(() => {
        const authToken = localStorage.getItem("token");
        // console.log("hiiii"+authToken)
        const headers = { Authorization: `Bearer ${authToken}` };
        axios.get('http://localhost:8181/course/courselist', {headers})
            .then(response => {
                setCourses(response.data);
                localStorage.setItem('courses', JSON.stringify(response.data));
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handlePDFGenerated = (pdfURL) => {
        setPDFURL(pdfURL);
    };
    
    return (
        <div>
            <header>
                <CustomNavbar/>
            </header>
            <div className='course'>
                <div>
                    <h1>Courses</h1><br/>
                    <h3>For accessing the course, just click on the course name</h3><br/>
                    {courses.map(course => (
                        <div key={course.id}>
                            <p style={{fontSize:20}}>Click the name to access content!   
                            <a href={course.content} download >
                            <span>{course.courseName}</span>
                            </a>
                            </p>
                            <br/>
                        </div>
                    ))}
                </div>
            </div>
            {showPopup && <EnrollmentPopup onClose={handleClosePopup} />}
            {pdfURL && <a href={pdfURL} download={`${selectedCourse.name}.pdf`}>Download PDF for {selectedCourse.name}</a>}
            {selectedCourse && <CoursePDF course={selectedCourse} onPDFGenerated={handlePDFGenerated} />}
        </div>
    );
};

export default Courses;
















