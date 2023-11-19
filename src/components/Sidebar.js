import React, { useEffect } from 'react';
import './Sidebar.css'; // Import your sidebar styles
import { useSidebar } from '../SidebarContext';

const Sidebar = () => {
    const { isSidebarOpen, toggleSidebar } = useSidebar();


    // Add an effect to toggle body overflow based on the sidebar state
    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
        };

        handleBodyOverflow();

        return () => {
            // Cleanup effect to reset body overflow when the component is unmounted
            document.body.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);


    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-display-noneForLaptop-blockForMobile" id='sidebar-display-noneForLaptop-blockForMobile'>
                <div className="flex-shrink-0 p-3 pt-3">
                    <i className="fa-regular fa-circle-xmark fw-lighter float-end mx-3 mt-4 pt-2" onClick={toggleSidebar}> </i>
                    <div className="align-items-center mb-3 pt-3 text-decoration-none border-bottom justify-content-between card-header">

                        <span>Hello</span>

                        <h5>Register with us! </h5>
                    </div>
                    <ul className="list-unstyled p-0">
                        <li>
                            <a href="/" className="btn rounded border-0 px-0 p-0 mt-2">
                                <span className="font-family-of-sidebars">&nbsp;<i className="fa-solid fa-home me-1"></i> Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="btn rounded border-0 px-0 p-0 mt-3">
                                <span className="font-family-of-sidebars">&nbsp;<i className="fa-solid fa-book me-2"></i> About</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="btn rounded border-0 px-0 p-0 mt-3">
                                <span className="font-family-of-sidebars">&nbsp;<i className="fa-solid fa-phone me-1"></i> Contact US</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="btn rounded border-0 px-0 p-0 mt-3">
                                <span className="font-family-of-sidebars">&nbsp;<i className="fa-solid fa-blog me-1"></i> Blog</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="btn rounded border-0 px-0 p-0 mt-3">
                                <span className="font-family-of-sidebars">&nbsp;<i className="fa-solid fa-bag-shopping me-2"></i> My
                                    Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="btn rounded border-0 px-0 p-0 mt-3 mb-2">
                                <span className="font-family-of-sidebars">&nbsp;<i className="fa-solid fa-heart me-1"></i> My
                                    Wishlist</span>
                            </a>
                        </li>

                        <li className="border-top my-3"></li>

                        <li>
                            <a href="/" className="btn rounded border-0 px-0 mt-1 ">
                                <span className="font-family-of-sidebars">&nbsp;<i className="fa-solid fa-right-to-bracket me-2"></i>
                                    Login</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="btn rounded border-0 px-0 mt-2 mb-5">
                                <span className="font-family-of-sidebars">&nbsp;<i className="fa-solid fa-user-plus me-1"></i>
                                    Sign-up</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Sidebar