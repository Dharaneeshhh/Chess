// src/App.jsx

import React from 'react';
import '../assets/css/landing.css';
import checked_img from '../assets/images/checked.jpg';

function Landing() {
  return (
      <div className='l__full'>
        {/* <img src={checked_img} alt=""/> */}
    <div className="l__container">
      <header className="l__header">
        <h1>Welcome to Chess Academy Portal</h1>
      </header>
      <main>
        <section className="l__about">
          <h2>About Us</h2>
          <p>Chess Academy Portal is a premier online platform for learning chess at all levels. We offer comprehensive courses, personalized coaching, and a supportive community to help you reach your full potential in the game of chess.</p>
        </section>
        <section className="l__services">
          <h2>Our Services</h2>
          <ul>
            <li>Expert-led Courses for Beginners, Intermediate, and Advanced Players</li>
            <li>Personalized Coaching Sessions with Grandmasters</li>
            <li>Community Forums and Events</li>
          </ul>
        </section>
        <section className="l__login-signup">
          <h2>Get Started Today</h2>
          <p>Unlock the world of chess and start your journey to mastery.</p>
          <div className="button-container">
            <a href="/login" className="button">Login</a>
            <a href="/signup" className="button">Sign Up</a>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Chess Academy Portal. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
}

export default Landing;
