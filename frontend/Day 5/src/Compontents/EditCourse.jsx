// BoxComponent.jsx
import './EditCourse.css';
import cimg from './course1.png'
import vimg from './course2.png'
import bimg from './course3.png'
import simg from './course4.png'
import kimg from './course5.png'


const BoxComponent = () => {
  return (
    <div>
      <div>
        <h1><center><b> Course</b></center></h1>
      </div>
      <br></br>
      <div className='pk'>
      <div>
        {/* <h3><center><i>Offline Schedule</i></center></h3> */}
      </div>
    </div>
    <br></br>

    <div className='agr'>


  
    <div className="boxx">
      
      {/* <h2 className='jaggu'>Monday</h2>
      <br></br>
      <p>Break</p> */}
      <img className="cimg"src={cimg}></img>
      <button>edit</button>

      
    </div>

<div className="boxx">
{/* <h2 className='jaggu'>Tuesday</h2>
<br></br>
<p>4:30 PM - 8:30 PM</p> */}
 <img className="vimg"src={vimg}></img>
      <button>edit</button>
</div>

<div className="boxx">
      {/* <h2 className='jaggu'>Wednesday</h2>
      <br></br>
      <p>4:30 PM - 8:30 PM</p> */}
       <img className="bimg"src={bimg}></img>
      <button >edit</button>
      
    </div>

    {/* <div className="boxx"> */}
      {/* <h2 className='jaggu'>Thursday</h2>
      <br></br>
      <p>4:30 PM - 8:30 PM.</p> */}
    {/* </div> */}
    </div>
    <div className='agr'>

    <div className="boxx">
      {/* <h2 className='jaggu'>Friday</h2>
      <br></br>
      <p>4:30 PM - 8:30 PM</p> */}
       <img className="simg"src={simg}></img>
      <button>edit</button>
    </div>

    <div className="boxx">
      {/* <h2 className='jaggu'>Saturday</h2>
      <br></br>
      <p>9:30 PM - 6:30 PM.</p> */}
       <img className="kimg"src={kimg}></img>
      <button>edit</button>
    </div>

    {/* <div className="boxx"> */}
      {/* <h2 className='jaggu'>Sunday</h2>
      <br></br>
      <p>9:30 PM - 12:30 PM</p> */}
    {/* </div> */}

    </div>
    <a href="/EditCourse2"><button className="edit1">Add courses</button></a><br></br><br></br>

    </div>
    
  );
}

export default BoxComponent;
