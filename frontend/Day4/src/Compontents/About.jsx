// AboutPage.jsx
import './About.css';
import user from './Chessboardanim.png'
const AboutPage = () => {
  return (
    <div className='top'>
      <div className='bod'>  
      <img src={user} className='abi' height={500} width={500} />
      </div>
      <div className="about-container">
      <h1>About Us</h1>
      <p>
     
Starchess to provide training and mentoring to enthusiastic players all over the world. Provides coaching for various levels based on their skills and need, either personal coaching or Group camps.Coaching is being Important at our academy or online.
<br></br>

<b>Age of Entry :</b>The entry age of online training is 6 years. The entry age of onboard – training is 5.5 Years
<br></br>

<b>Our Recommendation :</b>We recommend weekly 2 classes / Monthly 8 classes.
<br></br>
<b>Training Method :</b> Training through starchess website
<br></br>

<b>Students :</b> Starchess having students across UAE, US, UK etc.,
<br></br>
  </p>
    </div>
    </div>
    
  );
};

export default AboutPage;
