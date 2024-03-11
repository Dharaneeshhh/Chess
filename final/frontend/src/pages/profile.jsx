import React from 'react';
import '../assets/css/profile.css'
import CustomNavbar from '../components/custom_navbar';

const Profile = () => {

    return (
        <div>
          <header>
            <CustomNavbar/>
          </header>
              <h1 className='profile__head'>
                Profile
              </h1>
              <br/>
              <div className='underline' style={{marginLeft:724}}></div>
              <div className='profile__container'>
                <p className='profile__para'>UserName:</p> <p style={{fontSize:20}}>{localStorage.getItem('username')}</p> <p style={{color:'blue'}}>edit</p>
                <br/> 
                <p className='profile__para'>Email: </p><p style={{fontSize:20}}>{localStorage.getItem('email')}</p> <p style={{color:'blue'}}>edit</p>
                 <br/>
                <p className='profile__para'>Address:</p><p style={{fontSize:20}}>123, sample address, 12345</p> <p style={{color:'blue'}}>edit</p>
                <br/>
                <p className='profile__para'>College:</p><p style={{fontSize:20}}>skcet </p><p style={{color:'blue'}}>edit</p>
              </div>
        </div>
    );
};

export default Profile;