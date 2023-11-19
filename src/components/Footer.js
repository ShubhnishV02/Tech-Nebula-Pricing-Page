import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="py-5 container border-top">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Information</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our company</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our services</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Why We?</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Quicklink</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Services</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Support</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-3">

                        </div>

                        <div className="col-md-3 mb-3">
                            <h2>Tech Nebula</h2>
                            <span>@2023</span>
                            <ul className="list-unstyled d-flex mt-3">
                                <li><a className="link-body-emphasis" href="#"><i className="fa-brands fa-facebook-f fs-4"></i></a></li>
                                <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fa-brands fa-instagram fs-4"></i></a></li>
                                <li className="ms-3"><a className="link-body-emphasis" href="#"><i className=" fa-brands fa-whatsapp fs-4"></i></a></li>
                                <li className="ms-3"><a className="link-body-emphasis" href="#"><i className=" fa-brands fa-github fs-4"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top ">
                        <p>Copyright © 2023 <span>Tech Nebula</span>, Inc. All rights reserved.</p>
                        <p>website designed by Shubhnish Verma</p>

                    </div>
                </footer>


            </div>
        )
    }
}

export default Footer
