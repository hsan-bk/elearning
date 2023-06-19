import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom"
import Navigation from './components/navbar/Navigation';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { getall_user, userCurrent } from './redux/Slices/userSlice';
import PrivateRoute from './Routes/PrivateRoute';
import Profile from './components/dashboard/Profile';
import { getall_course } from './redux/Slices/courseSlice';
import { getall_tags } from './redux/Slices/tagSlice';
import TagList from './components/tag/TagList';
import CourseList from './components/course/CourseList';
import CourseDetails from './components/course/CourseDetails';
import TagDetails from './components/tag/TagDetails';
import Footer from './components/footer/Footer';

function App() {

  const [ping, setping] = useState(false);
  const isAuth=localStorage.getItem("token");
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getall_course());
  dispatch(getall_tags());
  dispatch(getall_user());
  if(isAuth){
    dispatch(userCurrent());
  }
}, [ping, dispatch, isAuth])

  //call all users
const allusers = useSelector((state) => state.user?.userlist)

  return (
    <div className="App">
     
    <Routes>
      <Route path="/" element={<div> <Navigation/> <Home allusers={allusers}/> <Footer/> </div>} /> 
      <Route path="/about" element={ <div><Navigation/> <About/> <Footer/></div> } /> 
      <Route path="/contact" element={ <div><Navigation/> <Contact/> <Footer/></div> } /> 
      <Route path="/login" element={ <div><Navigation/> <Login/> <Footer/></div> } /> 
      <Route path="/register" element={ <div><Navigation/> <Register/> <Footer/></div> } /> 
      <Route path="/all_tags" element={ <div><Navigation/> <TagList/> <Footer/></div> } /> 
      <Route path="/all_courses" element={ <div><Navigation/> <CourseList/> <Footer/></div> } /> 
      <Route path="/course/:id" element={ <div><Navigation/> <CourseDetails/> <Footer/></div> } /> 
      <Route path="/tag/:id" element={ <div><Navigation/> <TagDetails/> <Footer/></div> } /> 
      <Route element={ <PrivateRoute/> }>
        <Route path="/Profile" element={<Profile allusers={allusers} ping={ping} setping={setping}/> } />
        </Route>{" "}
    </Routes>     
    </div>
  );
}

export default App;
