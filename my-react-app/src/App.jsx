import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home  from './pages/Home'; 
import Login  from './pages/Login';
import Register  from './pages/Register';
import Header  from './components/header';
import AddBlog from './pages/AddBlog'
import AddCategory from './pages/AddCategory'
import SingleBlog from './pages/SingleBlog';
import PrivateRoute from './services/protectedRoutes';
export const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* //protectedRoutes */}
        <Route path="/" element={<PrivateRoute/>}> 
        <Route path="/" element={<Home/>}/>
        <Route path="/add-blog" element={<AddBlog/>}/>
        <Route path="/add-category" element={<AddCategory/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
        </Route>
      </Routes>
    </>
  )
}
export default App;
