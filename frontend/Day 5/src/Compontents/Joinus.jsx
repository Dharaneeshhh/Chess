
// import React from 'react'
// import NavbarU from '../Components/NavbarU';
import './Joinus.css';
// import { FaInfoCircle } from 'react-icons/fa';
// import { IoInformationCircle } from 'react-icons/io';

import {Link} from 'react-router-dom'
const Joinus = () => {
  return (
    <div className='AdminviewEvents'>
        {/* <NavbarU/> */}
        <div className="container9">
   <Link to="/account">
    <section className="section">
    
        <div className="image"><img src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZXNzfGVufDB8fDB8fHww" alt="Image 1"/></div>
        <div className="content">
        
            <span className='ViewEventTitle'> BASIC</span>
            {/* <p>Are you passionate about fun and celebration? Join us for an unforgettable birthday bash and embark on a journey of joy and unforgettable memories. Bring your enthusiasm, your sense of adventure, and your best true self to the party!</p> */}
            {/* <div className="ViewDeleteButton">
                <button className='View'>View</button>
                <button className='Delete'>Delete</button>
            </div> */}
        </div>
    </section>
    </Link>
    <Link to="/account">
    <section className="section reverse">
        <div className="image"><img src="https://e1.pxfuel.com/desktop-wallpaper/234/492/desktop-wallpaper-chess-black-and-whit-backgrounds-chess-black-and-white-thumbnail.jpg" alt="Image 2"/></div>
        <div className="content-reverse">
            <span className='ViewEventTitle'>BIGINNER</span>
            {/* <p>you can experience unique opportunities to realize your dream wedding, infusing it with your personal style, cultural touches, and unforgettable moments. ll craft a celebration that takes your love story wherever  always imagined.</p> */}
            {/* <div className="ViewDeleteButton">
                <button className='View'>View</button>
                <button className='Delete'>Delete</button>
            </div> */}

        </div>
    </section>
    </Link>
    <Link to="/account">
    <section className="section">
    
        <div className="image"><img src="https://e1.pxfuel.com/desktop-wallpaper/191/574/desktop-wallpaper-154-chess-chess-black-and-white-thumbnail.jpg" alt="Image 1"/></div>
        <div className="content">
        
            <span className='ViewEventTitle'>INTERMEDIATE</span>
            {/* <p>Are you passionate about fun and celebration? Join us for an unforgettable birthday bash and embark on a journey of joy and unforgettable memories. Bring your enthusiasm, your sense of adventure, and your best true self to the party!</p> */}
            {/* <div className="ViewDeleteButton">
                <button className='View'>View</button>
                <button className='Delete'>Delete</button>
            </div> */}
        </div>
    </section>
    </Link>
    <Link to="/account">
    <section className="section reverse">
        <div className="image"><img src="https://e1.pxfuel.com/desktop-wallpaper/392/265/desktop-wallpaper-chess-black-and-whit-backgrounds-chess-black-and-white-thumbnail.jpg" alt="Image 2"/></div>
        <div className="content-reverse">
            <span className='ViewEventTitle'>ADVANCE</span>
            {/* <p>you can experience unique opportunities to realize your dream wedding, infusing it with your personal style, cultural touches, and unforgettable moments.  craft a celebration that takes your love story wherever always imagined.</p> */}
            {/* <div className="ViewDeleteButton">
                <button className='View'>View</button>
                <button className='Delete'>Delete</button>
            </div> */}

        </div>
    </section>
    </Link>
    <Link to="/account">
    <section className="section">
    
    <div className="image"><img src="https://images.unsplash.com/photo-1587888191477-e74ac6bc9c4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoZXNzfGVufDB8fDB8fHww" alt="Image 1"/></div>
    <div className="content">
    
        <span className='ViewEventTitle'>EXPERT</span>
        {/* <p>Are you passionate about fun and celebration? Join us for an unforgettable birthday bash and embark on a journey of joy and unforgettable memories. Bring your enthusiasm, your sense of adventure, and your best true self to the party!</p> */}
        {/* <div className="ViewDeleteButton">
            <button className='View'>View</button>
            <button className='Delete'>Delete</button>
        </div> */}
    </div>
</section>
</Link>
    
</div>

    </div>
  );
};

export default Joinus