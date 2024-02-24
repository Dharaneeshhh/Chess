  import Login from "./Compontents/Login"
 import Signup from "./Compontents/Signup"
 import Home from "./Compontents/Home"
 import ClassSchedule from "./Compontents/ClassSchedule"
 import About from "./Compontents/About"
 import Levels from "./Compontents/Levels"
 import Contact from "./Compontents/Contact"
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import Slider from "./Compontents/Lslider"
 import Location from "./Compontents/Location"

import './App.css'
import Joinus from "./Compontents/Joinus"
import Feedback from "./Compontents/Feedback"
import Account from "./Compontents/Account"
import Adminhome from "./Compontents/Adminhome"
// import EditAcademy from "./Compontents/EditAcademy"
import AddStudent from "./Compontents/AddStudent"
import EditCourse from "./Compontents/EditCourse"
import EditCourse2 from "./Compontents/EditCourse2"
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  
  return (
    <>
      <Router>
          <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/home" exact component={Home} />
              <Route path="/class" exact component={ClassSchedule} />
              <Route path="/about" exact component={About} />
              <Route path="/level" exact component={Levels} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/slider" exact component={Slider} />
              <Route path="/location" exact component={Location} />
              <Route path="/joinus" exact component={Joinus} />
              <Route path="/account" exact component={Account} />
              <Route path="/feed" exact component={Feedback} />
              <Route path="/adminhome" exact component={Adminhome} />
            <Route path="/EditCourse" exact component={EditCourse} />
            <Route path="/EditCourse2" exact component={EditCourse2} />
            <Route path="/AddStudent" exact component={AddStudent} />

          </Switch>
      </Router>
       
         {/* <Home></Home>  */}
        {/* <ClassSchedule></ClassSchedule>
        <About> </About>
        <Levels></Levels>
        <Slider/> 
        <Contact></Contact>
      

        <Location></Location> */} 
        {/* <Profile></Profile> */}
        {/* <Signinpage></Signinpage> */}
        {/* <Signup></Signup> */}
        {/* <Login></Login> */}
        {/* <Joinus></Joinus> */}
        {/* <Feedback></Feedback> */}
        {/* <App></App> */}
        {/* <Account></Account> */}
        {/* <Adminhome></Adminhome> */}
        {/* <EditCourse2></EditCourse2> */}
        {/* <AddStudent></AddStudent> */}
        {/* <EditCourse></EditCourse> */}
    </>
  )
}

export default App;
