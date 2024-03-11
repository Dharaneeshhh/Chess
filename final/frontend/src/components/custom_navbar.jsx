import React from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';
import Picker from './picker';
import HiveIcon from '@mui/icons-material/Hive';

const CustomNavbar = () => {
    return (
        <div>
            <Navbar style={{color:"blue"}}>
    <Navbar.Brand href="#" icon={<HiveIcon/>}>CHESS</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}> <Link to={`/home`}>Home</Link>  </Nav.Item>
      <Nav.Item>   <Link to={`/about`}> About</Link>   </Nav.Item>
        <Nav.Item>   <Link to={`/contact`}>Contact</Link>   </Nav.Item>
        <Nav.Item>   <Link to={`/courses`}>Courses</Link>   </Nav.Item>
        <Nav.Item style={{float:"right"}}>   <Link to={`/login`}>Logout</Link>   </Nav.Item>
        </Nav>
        <Nav pullRight>
        <Nav.Item> <Link to={`/profile`}>Profile</Link>  </Nav.Item>

        </Nav>
  </Navbar>
        </div>
    );
  }
  
  export default CustomNavbar;
  
  {/* <Nav.Item>News</Nav.Item>
<Nav.Item>Products</Nav.Item> */}



{/* <Nav.Item>Company</Nav.Item>
<Nav.Item>Team</Nav.Item> */}



{/* <Nav.Item>Via email</Nav.Item>
<Nav.Item>Via telephone</Nav.Item> */}
{/* </Nav.Menu>
</Nav.Menu> */}



{/* <Nav pullRight>
  <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
</Nav> */}