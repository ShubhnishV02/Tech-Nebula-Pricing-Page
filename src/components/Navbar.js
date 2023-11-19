import React from 'react';
import './Sidebar.css'; // Import your sidebar styles
import { useSidebar } from '../SidebarContext';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  // console.log('isSidebarOpen:', isSidebarOpen);

  return (
    <div className="nav-stick-position">
      <header>
        <div className="nav-navbar-section">
          <div className="menu-display-noneForLaptop-blockForMobile" onClick={toggleSidebar}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="title-logo my-3">
            <h2 className='pt-2 pt-md-0 me-5 pe-5'><a href="/">Tech Nebula</a></h2>
          </div>
          <div className="nav-items">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Service</a>
            <a href="/">Contact</a>
            <a href="/">Blog</a>
          </div>
          <div className="form-search-bar">
            <form action="" className="d-flex">
              <input type="search" placeholder="search..." className="form-control rounded-end-0" />
              <button className="btn btn-secondary rounded-start-0 fa fa-search"></button>
            </form>
          </div>
          <div className="login-signup-section">
            <button type='button' className="btn">Login</button>
            <button type='button' className="btn mx-2">Signup</button>
          </div>
        </div>
      </header>
    </div>

  )
};

export default Navbar
