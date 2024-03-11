
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CustomSidenav from '../components/custom_sidenav';
// import { Panel } from 'rsuite';

// const AdminInstitutes = () => {
//     const [institutes, setInstitutes] = useState([]);
//     const [name, setName] = useState('');
//     const [address, setAddress] = useState('');
//     const [contactNumber, setContactNumber] = useState('');

//     useEffect(() => {
//         const authToken = localStorage.getItem("token");
//         const headers = { Authorization: `Bearer ${authToken}` };
//         axios.get('http://localhost:8181/institute/institutelist', {headers})
//             .then(response => {
//                 setInstitutes(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching institutes:', error);
//             });
//     }, []);

//     const handleAddInstitute = (event) => {
//         event.preventDefault();
//         const authToken = localStorage.getItem("token");
//         const headers = { Authorization: `Bearer ${authToken}` };
//         axios.post('http://localhost:8181/institute', {
//             name: name,
//             address: address,
//             contactNumber: contactNumber
//         }, {headers})
//             .then(response => {
//                 // Handle successful institute addition
//                 console.log('Institute added successfully:', response.data);
//                 // Update state or perform any other actions
//                 setInstitutes([...institutes, response.data]);
//                 // Clear input fields
//                 setName('');
//                 setAddress('');
//                 setContactNumber('');
//             })
//             .catch(error => {
//                 // Handle institute addition error
//                 console.error('Error adding institute:', error);
//             });
//     };

//     return (
//         <div style={{display:"flex"}}>
//             <div>
//                 <CustomSidenav/>
//             </div>
//             <div style={{display:'flex', gap:30, marginTop: 40, marginLeft: 40}}>
//                 {institutes.map((institute, index) => (
//                     <Panel key={index} header={institute.name} collapsible bordered>
//                         <p style={{fontSize: '20px'}}>
//                             Address: {institute.address}<br/>
//                             Contact Number: {institute.contactNumber}
//                         </p>
//                     </Panel>
//                 ))}
//             </div>
//             <div>
//                 <form onSubmit={handleAddInstitute}>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         value={name}
//                         onChange={(event) => setName(event.target.value)}
//                     />
//                     <label htmlFor="address">Address:</label>
//                     <input
//                         type="text"
//                         id="address"
//                         value={address}
//                         onChange={(event) => setAddress(event.target.value)}
//                     />
//                     <label htmlFor="contactNumber">Contact Number:</label>
//                     <input
//                         type="text"
//                         id="contactNumber"
//                         value={contactNumber}
//                         onChange={(event) => setContactNumber(event.target.value)}
//                     />
//                     <button type="submit">Add Institute</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AdminInstitutes;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomSidenav from '../components/custom_sidenav';
import { Panel } from 'rsuite';

const AdminInstitutes = () => {
    const [institutes, setInstitutes] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [selectedInstituteId, setSelectedInstituteId] = useState(null);

    useEffect(() => {
        const authToken = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${authToken}` };
        axios.get('http://localhost:8181/institute/institutelist', {headers})
            .then(response => {
                setInstitutes(response.data);
            })
            .catch(error => {
                console.error('Error fetching institutes:', error);
            });
    }, []);

    const handleAddInstitute = (event) => {
        event.preventDefault();
        const authToken = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${authToken}` };
        axios.post('http://localhost:8181/institute', {
            name: name,
            address: address,
            contactNumber: contactNumber
        }, {headers})
            .then(response => {
                // Handle successful institute addition
                console.log('Institute added successfully:', response.data);
                // Update state or perform any other actions
                setInstitutes([...institutes, response.data]);
                // Clear input fields
                setName('');
                setAddress('');
                setContactNumber('');
            })
            .catch(error => {
                // Handle institute addition error
                console.error('Error adding institute:', error);
            });
    };

    const handleUpdateInstitute = (event) => {
        event.preventDefault();
        const authToken = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${authToken}` };
        axios.put(`http://localhost:8181/institute/${selectedInstituteId}`, {
            name: name,
            address: address,
            contactNumber: contactNumber
        }, {headers})
            .then(response => {
                // Handle successful institute update
                console.log('Institute updated successfully:', response.data);
                // Update state or perform any other actions
                const updatedInstitutes = [...institutes];
                const updatedIndex = updatedInstitutes.findIndex(institute => institute._id === selectedInstituteId);
                updatedInstitutes[updatedIndex] = response.data;
                setInstitutes(updatedInstitutes);
                // Clear input fields
                setName('');
                setAddress('');
                setContactNumber('');
                setSelectedInstituteId(null);
            })
            .catch(error => {
                // Handle institute update error
                console.error('Error updating institute:', error);
            });
    };

    const handleEditInstitute = (institute) => {
        setName(institute.name);
        setAddress(institute.address);
        setContactNumber(institute.contactNumber);
        setSelectedInstituteId(institute._id);
    };

    const handleDeleteInstitute = (instituteId) => {
        const authToken = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${authToken}` };
        axios.delete(`http://localhost:8181/institute/${instituteId}`, {headers})
            .then(response => {
                // Handle successful institute deletion
                console.log('Institute deleted successfully:', response.data);
                // Update state or perform any other actions
                const updatedInstitutes = institutes.filter(institute => institute._id !== instituteId);
                setInstitutes(updatedInstitutes);
            })
            .catch(error => {
                // Handle institute deletion error
                console.error('Error deleting institute:', error);
            });
    };

    return (
        <div style={{display:"flex"}}>
            <div>
                <CustomSidenav/>
            </div>
            <div style={{display:'flex', gap:30, marginTop: 40, marginLeft: 40}}>
                {institutes.map((institute, index) => (
                    <Panel key={index} header={institute.name} collapsible bordered>
                        <p style={{fontSize: '20px'}}>
                            id: {institute.id} <br/>
                            Address: {institute.address}<br/>
                            Contact Number: {institute.contactNumber}
                        </p>
                        <button onClick={() => handleEditInstitute(institute)}>Edit</button>
                        <button onClick={() => handleDeleteInstitute(institute._id)}>Delete</button>
                    </Panel>
                ))}
            </div>
            <div>
                <form onSubmit={selectedInstituteId ? handleUpdateInstitute : handleAddInstitute}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input
                        type="text"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(event) => setContactNumber(event.target.value)}
                    />
                    <button type="submit">{selectedInstituteId ? 'Update' : 'Add'} Institute</button>
                    {selectedInstituteId && <button onClick={() => setSelectedInstituteId(null)}>Cancel</button>}
                </form>
            </div>
        </div>
    );
};

export default AdminInstitutes;


