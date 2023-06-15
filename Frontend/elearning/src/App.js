import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom"
import Navigation from './components/navbar/Navigation';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import { useDispatch } from 'react-redux';
import { useEffect, useState} from 'react';
import { userCurrent } from './redux/Slices/userSlice';
import PrivateRoute from './Routes/PrivateRoute';
import Profile from './components/dashboard/Profile';
import { getall_course } from './redux/Slices/courseSlice';
import { getall_tags } from './redux/Slices/tagSlice';
import TagList from './components/tag/TagList';
import CourseList from './components/course/CourseList';
import Course from './components/course/Course';
import Tag from './components/tag/Tag';
import Footer from './components/footer/Footer';

function App() {

  const [ping, setping] = useState(false);
  const isAuth=localStorage.getItem("token");
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getall_course());
  dispatch(getall_tags());
  if(isAuth){
    dispatch(userCurrent());
  }
}, [ping, dispatch, isAuth])



  return (
    <div className="App">
     
    <Routes>
      <Route path="/" element={<div> <Navigation/> <Home/> <Footer/> </div>} /> 
      <Route path="/about" element={ <div><Navigation/> <About/></div> } /> 
      <Route path="/contact" element={ <div><Navigation/> <Contact/></div> } /> 
      <Route path="/login" element={ <div><Navigation/> <Login/></div> } /> 
      <Route path="/register" element={ <div><Navigation/> <Register/></div> } /> 
      <Route path="/all_tags" element={ <div><Navigation/> <TagList/></div> } /> 
      <Route path="/all_courses" element={ <div><Navigation/> <CourseList/></div> } /> 
      <Route path="/course/:id" element={ <div><Navigation/> <Course/></div> } /> 
      <Route path="/tag/:id" element={ <div><Navigation/> <Tag/></div> } /> 
      <Route element={ <PrivateRoute/> }>
        <Route path="/Profile" element={<Profile ping={ping} setping={setping}/> } />
        </Route>{" "}
    </Routes>     
    </div>
  );
}

export default App;
