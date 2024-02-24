// BoxComponent.jsx
import './Account.css';
import { HiAcademicCap } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { HiMiniCircleStack } from "react-icons/hi2";
import { HiMiniTrophy } from "react-icons/hi2";
import { IoMdAnalytics } from "react-icons/io";
import { BiSolidChess } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaChess } from "react-icons/fa";
import {Link} from 'react-router-dom'

const BoxComponent = () => {
  return (
    <div className='nv'>
      <div className='po'>
        <h1 ><center><b>Welcome</b></center></h1>
      </div>
      <br></br>
      {/* <div className='ak'>
      <div>
        <h3><center><i>Offline Schedule</i></center></h3>
      </div>
    </div> */}
    <br></br>
   
    <div className='ac1'>

        
    <a href='https://coaching.starchess.in/app/course'>
    <div className="box5">
    <HiAcademicCap size={70} />
    <h>Courses</h>
      
      
      
    </div>
    </a>
<a href='https://coaching.starchess.in/app/database'>
<div className="box5">
<HiMiniCircleStack size={70}/>
<h>Database</h>
  

</div>
</a>
<a href='https://coaching.starchess.in/app/tournaments'>
<div className="box5">
<HiMiniTrophy size={70}/>
<h>Tournament</h>
      
    </div>
    </a>

    {/* <div className="box5">
      
      
    </div> */}
    </div>
    <div className='ac1'>
    <a href='https://coaching.starchess.in/app/reports/student/overall'>

    <div className="box5">
    <IoMdAnalytics size={70}/>
    <h>Reports</h>
      
    </div>
    </a>
<a href='https://coaching.starchess.in/app/board'>
    <div className="box5">
    <BiSolidChess size={70} />
    <h>Board</h>
      
      
    </div>
    </a>
<a href='https://coaching.starchess.in/app/assignment'>
    <div className="box5">
    <MdAssignment size={70}/>
    <h>Assaignment</h>
      
    </div>
    </a>
    {/* <div className="box5">
      
      </div> */}
      

    </div>
    <div className='ac1'>
<a href='https://coaching.starchess.in/app/practice'>
<div className="box5">
<FaFire size={70} />
<h>Practice</h>
  
</div>
</a>
<a href='https://coaching.starchess.in/app/practice'>
<div className="box5">
<FaChess size={70}/>
<h>Game Area</h>
  
</div>
</a>
<Link to="/">
<div className="box5">
<HiArrowRightOnRectangle size={70}/>
<h>Logout</h>
  
</div>
</Link>
</div>

    </div>
    
  );
}

export default BoxComponent;
