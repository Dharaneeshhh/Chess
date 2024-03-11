import './assets/css/login.css'
import { Suspense, lazy } from "react"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Spinner from "./components/spinner"
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Courses from './pages/Courses.jsx'
import Dashboard from './pages/admin_dashboard.jsx'
import Roles from './pages/userroles.jsx'
import Profile from './pages/profile.jsx'
import Adminlogin from './pages/admin_login.jsx'
import Admincourse from './pages/admin_course.jsx'

import Landing from './pages/Landing.jsx'
import MediaCard from './pages/Courses.jsx'
import AdminInstitutes from './pages/admin_institutes.jsx'

const Lazyabout=lazy(()=>import("./pages/About.jsx"))
const Lazycontact=lazy(()=>import("./pages/Contact.jsx"))

const App=()=>{
  const router = createBrowserRouter([
    {
      path: '/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path: '/about',
      element:<Suspense fallback={<Spinner/>}><Lazyabout/></Suspense>
    },
    {
      path: '/contact',
      element:<Suspense fallback={<Spinner/>}><Lazycontact/></Suspense>
    },
    {
      path: '/login',
      element:<Suspense fallback={<Spinner/>}><Login/></Suspense>
    },
    {
      path: '/signup',
      element:<Suspense fallback={<Spinner/>}><Signup/></Suspense>
    },
    {
      path: '/courses',
      element:<Suspense fallback={<Spinner/>}><Courses/></Suspense>
    },
    {
      path: '/dashboard',
      element:<Suspense fallback={<Spinner/>}><Dashboard/></Suspense>
    },
    {
      path: '/roles',
      element:<Suspense fallback={<Spinner/>}><Roles/></Suspense>
    },
    {
      path: '/profile',
      element:<Suspense fallback={<Spinner/>}><Profile/></Suspense>
    },
    {
      path: '/adminlogin',
      element:<Suspense fallback={<Spinner/>}><Adminlogin/></Suspense>
    },
    {
      path: '/admincourse',
      element:<Suspense fallback={<Spinner/>}><Admincourse/></Suspense>
    },
    {
      path: '/admininstitute',
      element:<Suspense fallback={<Spinner/>}><AdminInstitutes/></Suspense>
    },
    {
      path: '/',
      element:<Suspense fallback={<Spinner/>}><Landing/></Suspense>
    }
 

  ])

    return (
    <RouterProvider router={router}/>
  )
}

export default App;
