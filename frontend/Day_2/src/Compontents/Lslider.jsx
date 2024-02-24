import { useState, useEffect } from 'react';
import './Slider.css'
import q1 from './quotes1.jpeg'
import q2 from './quotes2.jpeg'
import q3 from './quotes3.jpeg'
import q4 from './quotes4.jpeg'
import q5 from './quotes5.jpeg'
import q6 from './quotes6.jpeg'

const AutomaticSlideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = () => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    setSlideIndex((prevIndex) => (prevIndex >= slides.length - 1 ? 0 : prevIndex + 1));
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
  };

  useEffect(() => {
    const interval = setInterval(showSlides, 4000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className='bd'><center><h1 className='std'> Chess Quotes</h1>
      <div className="slideshow-container">
        <div className="mySlides fade">
          {/* <div className="numbertext">1 / 6</div> */}
          <img src={q1} style={{ width: '100%',height:'70vh' }} />
        </div>

        <div className="mySlides fade">
          {/* <div className="numbertext">2 / 6</div> */}
          <img src={q2} style={{ width: '100%', height:'70vh' }} />
        </div>

        <div className="mySlides fade">
          {/* <div className="numbertext">3 / 6</div> */}
          <img src={q3} style={{ width: '100%', height:'70vh' }} />
        </div>

        <div className="mySlides fade">
          {/* <div className="numbertext">4 / 6</div> */}
          <img src={q4} style={{ width: '100%', height:'70vh' }} />
        </div>
        
        <div className="mySlides fade">
          {/* <div className="numbertext">5 / 6</div> */}
          <img src={q5} style={{ width: '100%', height:'70vh' }} />
        </div>
        <div className="mySlides fade">
          {/* <div className="numbertext">6 / 6</div> */}
          <img src={q6} style={{ width: '100%', height:'70vh' }} />
        </div>
        {/* <span className="dot" onClick="currentSlide(1)"></span> 
        <span className="dot" onClick="currentSlide(2)"></span> 
        <span className="dot" onClick="currentSlide(3)"></span>  */}
      </div></center>
    </div>
  );
};

export default AutomaticSlideshow;