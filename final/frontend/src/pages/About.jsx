import React from 'react';
import CustomNavbar from '../components/custom_navbar';
import '../assets/css/about.css'
import about_img from '../assets/images/about1.png'
const About = () => {
    return (
        <div className='about_container'> 
            <header>
            <CustomNavbar/>
            </header>
                <div className='about__text1'>
                    Welcome!!! 
                </div>
                <div className='about__text2'>
                    I'm WhiteFang
                    </div>
                <div className='about__text3'>
                    Web Designer (Newbie)
                    </div>
            <aside>
            <div className='con'>
                <p>
            This website is dedicated to providing information about chess academies in Coimbatore, Tamil Nadu.<br></br>
                    Whether you're a beginner looking to learn the game or an experienced player seeking advanced training,
                    <br/>you'll find valuable resources and contact information for popular chess academies in the area.<br/>
                    Additionally, we provide information about famous chess players like Magnus Carlsen and Garry Kasparov.
                    <br/>Enjoy exploring the world of chess with us!
                    </p>
            </div>
            </aside>
        </div>
    );
}

export default About;
