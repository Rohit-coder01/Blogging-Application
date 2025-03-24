import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Header = () => {

  const token=localStorage.getItem("token")
  const username=localStorage.getItem("username")
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login")
    alert("Logout Successfully")

  }
  
  return (
    <>
    <nav className="navbar navbar-expand-lg" 
  style={{ backgroundColor: "#001f3f", borderBottom: "2px solid #FFD700" }}>

  <Link className="navbar-brand text-white mx-3" to="/">
    Blog
  </Link>
  
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto text-white">
      <li className="nav-item active">
        <Link className="nav-link text-white" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
  <Link className="nav-link text-white" to="/add-blog">
    Add Blog
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link text-white" to="/add-category">
    Add Category
  </Link>
</li>
</ul>
<div className="ms-auto">

{token && token !== null?
  <>
<button className="btn btn-primary mr-6">Welcome: {username}</button>
<button onClick={handleLogout} className="btn btn-primary">Logout</button>

  </>
:
<>
  <Link to={"/login"}>
    <button className="btn btn-primary mx-2">Login</button>
  </Link>
  <Link to={"/register"}>
    <button className="btn btn-primary mx-3">Register</button>
  </Link>
</>} 
</div>


 </div>

</nav>
</>

  )
}

export default Header
