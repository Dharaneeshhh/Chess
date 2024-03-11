import React, { useEffect, useState } from 'react';
import CustomSidenav from '../components/custom_sidenav';
import '../assets/css/userroles.css'
import Det_tab from '../components/table';



const UserRoles = () => {

  return (
    <div>
      <div>
        <CustomSidenav/>
        </div>
      <div className='user__table'>
        <Det_tab/>
        </div>
    </div>
  );
};

export default UserRoles;

