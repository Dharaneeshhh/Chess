// import React, { useState, useEffect } from 'react';
// import Cards from '../components/cards';
// import CustomSidenav from '../components/custom_sidenav';
// import axios from 'axios';

// const Admincourse = () => {
//   const [institutes, setInstitutes] = useState([]);
//   const [newInstitute, setNewInstitute] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchInstitutes();
//   }, []);

//   const fetchInstitutes = async () => {
//     try {
//       const response = await axios.get('http://localhost:8181/api/v1/auth/institute');
//       setInstitutes(response.data);
//     } catch (error) {
//       setError('Error fetching institutes');
//     }
//   };

//   const handleChange = (event) => {
//     setNewInstitute(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!newInstitute.trim()) {
//       setError('Institute name cannot be empty');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/institute', { name: newInstitute });
//       setInstitutes([...institutes, response.data]);
//       setNewInstitute('');
//       setError(null);
//     } catch (error) {
//       setError('Error creating institute');
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8181/api/v1/auth/institute/${id}`);
//       setInstitutes(institutes.filter((institute) => institute.id !== id));
//       setError(null);
//     } catch (error) {
//       setError('Error deleting institute');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', marginRight: 900 }}>
//       <div className='bar'>
//         <CustomSidenav />
//       </div>
//       <div className='course'>
//         <form onSubmit={handleSubmit}>
//           <input type='text' placeholder='Enter institute name' value={newInstitute} onChange={handleChange} />
//           <button type='submit'>Add Institute</button>
//         </form>
//         {error && <div className="error">{error}</div>}
//         {institutes.map((institute) => (
//           <div key={institute.id}>
//             <h2>{institute.name}</h2>
//             <button onClick={() => handleDelete(institute.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Admincourse;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CustomNavbar from '../components/custom_navbar';
// import Cards from '../components/cards';
// import '../assets/css/courses.css';
// import EnrollmentPopup from '../components/popup';
// import CoursePDF from '../components/coursedownload';

// const AdminCourse = () => {
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

//     const handleAddCourse = (courseData) => {
//         const authToken = localStorage.getItem("token");
//         console.log("hiiii"+authToken)
//         const headers = { Authorization: `Bearer ${authToken}` };
//         axios.post('http://localhost:8181/course', courseData, {headers})
//             .then(response => {
//                 // Handle successful course addition
//                 console.log('Course added successfully:', response.data);
//                 // Update state or perform any other actions
//                 setCourses([...courses, response.data]);
//             })
//             .catch(error => {
//                 // Handle course addition error
//                 console.error('Error adding course:', error);
//             });
//     };

//     const handleUpdateCourse = (courseId, courseData) => {
//         const authToken = localStorage.getItem("token");
//         console.log("hiiii"+authToken)
//         const headers = { Authorization: `Bearer ${authToken}` };
//         axios.put(`http://localhost:8181/course/${courseId}`, courseData, {headers})
//             .then(response => {
//                 // Handle successful course update
//                 console.log('Course updated successfully:', response.data);
//                 // Update state or perform any other actions
//                 const updatedCourses = courses.map(course => {
//                     if (course.id === courseId) {
//                         return response.data;
//                     }
//                     return course;
//                 });
//                 setCourses(updatedCourses);
//             })
//             .catch(error => {
//                 // Handle course update error
//                 console.error('Error updating course:', error);
//             });
//     };

//     const handleDeleteCourse = (courseId) => {
//         const authToken = localStorage.getItem("token");
//         console.log("hiiii"+authToken)
//         const headers = { Authorization: `Bearer ${authToken}` };
//         axios.delete(`http://localhost:8181/course/${courseId}`, {headers})
//             .then(response => {
//                 // Handle successful course deletion
//                 console.log('Course deleted successfully:', response.data);
//                 // Update state or perform any other actions
//                 const filteredCourses = courses.filter(course => course.id !== courseId);
//                 setCourses(filteredCourses);
//             })
//             .catch(error => {
//                 // Handle course deletion error
//                 console.error('Error deleting course:', error);
//             });
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
//                             <span>{course.courseName}</span>
//                             <button onClick={() => handleCourseClick(course)}>Add</button>
//                             <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {showPopup && <EnrollmentPopup onClose={handleClosePopup} />}
//             {pdfURL && <a href={pdfURL} download={`${selectedCourse.name}.pdf`}>Download PDF for {selectedCourse.name}</a>}
//             {selectedCourse && <CoursePDF course={selectedCourse} onPDFGenerated={handlePDFGenerated} />}
//             <AddCourseForm onAddCourse={handleAddCourse} />
//         </div>
//     );
// };

// const AddCourseForm = ({ onAddCourse }) => {
//   const [courseId, setCourseId] = useState('');
//   const [courseName, setCourseName] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Validate the form data here if needed

//     // Call the onAddCourse prop with the form data
//     onAddCourse({ courseId, courseName, content });

//     // Clear the form after submission
//     setCourseId('');
//     setCourseName('');
//     setContent('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="courseId">Course ID:</label>
//       <input
//         type="text"
//         id="courseId"
//         value={courseId}
//         onChange={(event) => setCourseId(event.target.value)}
//       />
//       <label htmlFor="courseName">Course Name:</label>
//       <input
//         type="text"
//         id="courseName"
//         value={courseName}
//         onChange={(event) => setCourseName(event.target.value)}
//       />
//       <label htmlFor="content">Content:</label>
//       <textarea
//         id="content"
//         value={content}
//         onChange={(event) => setContent(event.target.value)}
//       />
//       <button type="submit">Add Course</button>
//     </form>
//   );
// };

// export default AdminCourse;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from '../components/custom_navbar';
import Cards from '../components/cards';
import '../assets/css/courses.css';
import EnrollmentPopup from '../components/popup';
import CoursePDF from '../components/coursedownload';
import CustomSidenav from '../components/custom_sidenav';

const AdminCourse = () => {
    const [courses, setCourses] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [pdfURL, setPDFURL] = useState(null);

    useEffect(() => {
        const authToken = localStorage.getItem("token");
        console.log("hiiii"+authToken)
        const headers = { Authorization: `Bearer ${authToken}` };
        axios.get('http://localhost:8181/course/courselist', {headers})
            .then(response => {
                setCourses(response.data);
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

    const handleAddCourse = (courseData) => {
        const authToken = localStorage.getItem("token");
        console.log("hiiii"+authToken)
        const headers = { Authorization: `Bearer ${authToken}` };
        axios.post('http://localhost:8181/course', courseData, {headers})
            .then(response => {
                // Handle successful course addition
                console.log('Course added successfully:', response.data);
                // Update state or perform any other actions
                setCourses([...courses, response.data]);
            })
            .catch(error => {
                // Handle course addition error
                console.error('Error adding course:', error);
            });
    };

    // const handleUpdateCourse = (courseId, courseData) => {
    //     const authToken = localStorage.getItem("token");
    //     console.log("hiiii"+authToken)
    //     const headers = { Authorization: `Bearer ${authToken}` };
    //     axios.put(`http://localhost:8181/course/${courseId}`, courseData, {headers})
    //         .then(response => {
    //             // Handle successful course update
    //             console.log('Course updated successfully:', response.data);
    //             // Update state or perform any other actions
    //             const updatedCourses = courses.map(course => {
    //                 if (course.id === courseId) {
    //                     return response.data;
    //                 }
    //                 return course;
    //             });
    //             setCourses(updatedCourses);
    //         })
    //         .catch(error => {
    //             // Handle course update error
    //             console.error('Error updating course:', error);
    //         });
    // };

    // const handleDeleteCourse = (courseId) => {
    //     const authToken = localStorage.getItem("token");
    //     console.log("hiiii"+authToken)
    //     const headers = { Authorization: `Bearer ${authToken}` };
    //     axios.delete(`http://localhost:8181/course/${courseId}`, {headers})
    //         .then(response => {
    //             // Handle successful course deletion
    //             console.log('Course deleted successfully:', response.data);
    //             // Update state or perform any other actions
    //             const filteredCourses = courses.filter(course => course.id !== courseId);
    //             setCourses(filteredCourses);
    //         })
    //         .catch(error => {
    //             // Handle course deletion error
    //             console.error('Error deleting course:', error);
    //         });
    // };
    
    return (
        <div style={{display:"flex"}}>
            <div>
                <CustomSidenav/>
                </div>
           
            <div className='course' style={{marginLeft:10}}>
                <div>
                    <h1>Admin: Course Management</h1><br/>
                    <p>All Courses: </p>
                    {courses.map(course => (
                        <div key={course.id}>
                            <span>Name: {course.courseName} ID: {course.courseId}</span>
                            {/* <button onClick={() => handleCourseClick(course)}>Add</button> */}

                            {/* <button onClick={() => handleDeleteCourse(course.id)}>Delete</button> */}
                        </div>
                    ))}
                </div>
            </div>
            {showPopup && <EnrollmentPopup onClose={handleClosePopup} />}
            {pdfURL && <a href={pdfURL} download={`${selectedCourse.name}.pdf`}>Download PDF for {selectedCourse.name}</a>}
            {selectedCourse && <CoursePDF course={selectedCourse} onPDFGenerated={handlePDFGenerated} />}
            <AddCourseForm onAddCourse={handleAddCourse} />
        </div>
    );
};

const AddCourseForm = ({ onAddCourse }) => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form data here if needed

    // Call the onAddCourse prop with the form data
    onAddCourse({ courseId, courseName, content });

    // Clear the form after submission
    setCourseId('');
    setCourseName('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="courseId">Course ID:</label>
      <input
        type="text"
        id="courseId"
        value={courseId}
        onChange={(event) => setCourseId(event.target.value)}
      />
      <label htmlFor="courseName">Course Name:</label>
      <input
        type="text"
        id="courseName"
        value={courseName}
        onChange={(event) => setCourseName(event.target.value)}
      />
      <label htmlFor="content">Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AdminCourse;





