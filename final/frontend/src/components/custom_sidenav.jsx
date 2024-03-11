import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link } from 'react-router-dom';
// import { height } from '@mui/system';
const CustomSidenav = () => {
    return (
             <div style={{width:300, height:200}}>
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Body style={{marginTop:60}}>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" icon={<DashboardIcon />}>
          <Link to={`/dashboard`}>Dashboard</Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<GroupIcon />}>
            <Link to={`/roles`}>User Group</Link> 
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
            {/* <Nav.Item eventKey="3-1">Geo</Nav.Item> */}
            <Nav.Item eventKey="3-2"><Link to={`/admincourse`}>Courses</Link></Nav.Item>
            <Nav.Item eventKey="3-2"><Link to={`/admininstitute`}>Academies</Link></Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
            <Nav.Item eventKey="4-1"><Link to={`/login`}>Logout</Link></Nav.Item>
            {/* <Nav.Item eventKey="4-2">Channels</Nav.Item>
            <Nav.Item eventKey="4-3">Versions</Nav.Item>
            <Nav.Menu eventKey="4-5" title="Custom Action">
              <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
              <Nav.Item eventKey="4-5-2">Action Params</Nav.Item> */}
            {/* </Nav.Menu> */}
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
        
    );
}

export default CustomSidenav;
