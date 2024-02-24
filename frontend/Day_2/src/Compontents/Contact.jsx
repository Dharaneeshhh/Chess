import ss from './contactpage.png'
import './Contact.css';

const ContactPage = () => {
  return (

    <div>
        <div className='k'>
        <div className='ee'>
      <h1 className='we'> Contact Us</h1>
      </div>
    <div className="contact-page">
      <form className='rr'>
        
        <div className='firstin'>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className='secin'>
        <input id="message" name="message" placeholder="Your Message" rows="4" className='pp' required />
        <button type="submit" className='uu'>Submit</button>

        </div>
      </form>
        </div>
        <div className='tt'>



        
    </div>
    <div className='gg'>
    <img src={ss}
    
        height={400}
        width={300}

        />
        </div>
        </div>
        </div>
  );
};

export default ContactPage;
