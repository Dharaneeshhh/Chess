import React from 'react';
import CustomSidenav from '../components/custom_sidenav';
import Cards from '../components/cards';
import '../assets/css/dashboard.css'

const Dashboard = () => {
    return (
        <div className='dash__container'>
            <div className='side'>
            <CustomSidenav/>
            </div>
        <div className='count'>
            <Cards name={"Number of Users : "}/>
            <Cards name={"Number of Admins: "}/>
            <Cards name={"Number of Feedbacks: "}/>

        </div>
        </div>
    );
};

export default Dashboard;