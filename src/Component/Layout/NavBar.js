// import React from 'react'
// import { NavLink } from 'react-router-dom'

// // export default function Navbar() {
// //   return (
// //     <>
// //     <nav className="navbar navbar-expand-lg bg-light">
// //   <div className="container-fluid">
// //       <a className="navbar-brand" href="#"> Daily_Task </a>
// //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
// //         <li className="nav-item">
// //           <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
// //         </li>
// //         <li className="nav-item">
// //           <NavLink className="nav-link" to="/menu">Menu</NavLink>
// //         </li>
// //         <li className="nav-item">
// //           <NavLink className="nav-link " aria-current="page" to="/offer">Offer</NavLink>
// //         </li>
// //         <li className="nav-item">
// //           <NavLink className="nav-link" to='/about'>About us</NavLink>
// //         </li>
// //         <li className="nav-item">
// //           <NavLink className="nav-link " aria-current="page" to="/contact">Contact us</NavLink>
// //         </li>
       
// //       </ul>
// //       <form className="d-flex" role="search">
        
// //         <button className="btn btn-outline-success" type="submit">Search</button>
// //       </form>
// //     </div>
// //   </div>
// // </nav>
//     </>
//   )
// }

import React from 'react'
import {  NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      Hello
            <div>
    <nav>
      <NavLink className="Home" to="/"><b>Home</b></NavLink>
      <NavLink to="/Menu"><b>Menu</b></NavLink> 
       <NavLink to="/Contact"><b>Contact us</b></NavLink>  
      <NavLink to="/About"><b>About us</b></NavLink>
      <NavLink to="/Offer"><b>Offers</b></NavLink>
    </nav>
    </div>
    </div>
  )
}

export default NavBar

