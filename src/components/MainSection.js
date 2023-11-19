import React, { Component } from 'react'

class MainSection extends Component {
    constructor(props) {
        super(props)
        this.props = props;

    }

    render() {
        return (
            <div>
                <div className='full-bg-color'>


                    <h1 className="text-center pt-4 main-heading">Choose the plan that's right for you.</h1>
                    <p className='para-main-heading container'>Discover the perfect plan tailored to meet your needs and elevate your online presence. Choose from our range of customizable website plans designed to empower your brand, enhance user experience, and ensure seamless growth for your business.</p>
                    <div className='divider-line'>
                        <h3 className='text-center'>Portfolio</h3>
                    </div>
                    <div className='column-divided-into-three-parts container mt-3 mb-1 pt-3 pb-3'>
                        <div className='column-divided-left rounded-3'>
                            <div>
                                <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>Classic</h1>
                                <h2><span>Rs.</span> 3999</h2>
                                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                <ul className='list-unstyled'>
                                    <li> 1-Page Website</li>
                                    <li> Free SSL</li>
                                </ul>
                                <div className='px-5'>
                                    <button type='button' className='btn btn-lg mt-5 w-100 border-secondary'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='column-divided-middle rounded-3'>
                            <div>
                                <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>Modern</h1>
                                <h2><span>Rs.</span> 5999</h2>
                                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                <ul className='list-unstyled'>
                                    <li> 2-Page Website</li>
                                    <li> Free SSL</li>
                                    <li> Free 10 email IDs</li>
                                </ul>
                                <div className='px-5'>
                                    <button type='button' className='btn btn-lg mt-4 w-100'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='divider-line'>
                        <h3 className='text-center mt-5 mb-4'>Business Website</h3>
                    </div>
                    <div className='column-divided-into-three-parts container mt-3 mb-1 pt-2 pb-4'>
                        <div className='column-divided-left rounded-3'>
                            <div>
                                <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>Classic</h1>
                                <h2><span>Rs.</span> 7999</h2>
                                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                <ul className='list-unstyled'>
                                    <li> 3-Page Website</li>
                                    <li> Free SSL</li>
                                </ul>
                                <div className='px-5'>
                                    <button type='button' className='btn border-secondary w-100 btn-lg mt-5'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='column-divided-middle rounded-3'>
                            <div>
                                <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>Modern</h1>
                                <h2><span>Rs.</span> 11999</h2>
                                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                <ul className='list-unstyled'>
                                    <li> 5-Page Website</li>
                                    <li> Free SSL</li>
                                    <li> Free 20 email IDs</li>
                                </ul>
                                <div className='px-5'>
                                    <button type='button' className='btn w-100 btn-lg mt-4'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='column-divided-right rounded-3'>
                            <div>
                                <h1 className='border-bottom border-top py-3 bg-body-secondary rounded-top-3'> Super Modern</h1>
                                <h2><span>Rs.</span> 19999</h2>
                                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                <ul className='list-unstyled'>
                                    <li> 7-Page Website</li>
                                    <li> Free SSL</li>
                                    <li> Free 50 email IDs</li>
                                    <li> Chatbot</li>
                                </ul>
                                <div className='px-5'>
                                    <button type='button' className='btn w-100 btn-lg'>Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='divider-line3'>
                        <h3 className='text-center mt-5 mb-4'>E-commerce Website</h3>
                    </div>
                    <div className='column-divided-into-three-parts container mt-3 mb-1 pt-2 pb-4'>
                        <div className='column-divided-left rounded-3'>
                            <div>
                                <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>Classic</h1>
                                <h2><span>Rs.</span> 9999</h2>
                                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                <ul className='list-unstyled'>
                                    <li> 1-Page Website</li>
                                    <li> Free SSL</li>
                                </ul>
                                <div className='px-5'>
                                    <button type='button' className='btn border-secondary w-100 btn-lg mt-5'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='column-divided-middle rounded-3'>
                            <div>
                                <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>Modern</h1>
                                <h2><span>Rs.</span> 13999</h2>
                                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                <ul className='list-unstyled'>
                                    <li> 3-Page Website</li>
                                    <li> Free SSL</li>
                                    <li> Free 20 email IDs</li>
                                </ul>
                                <div className='px-5'>
                                    <button type='button' className='btn w-100 btn-lg mt-4'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='column-divided-right rounded-3 mb-5'>
                            <div>
                                <h1 className='border-bottom border-top py-3 bg-body-secondary rounded-top-3'>Super Modern</h1>
                                <h2><span>Rs.</span> 21999</h2>
                                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                <ul className='list-unstyled'>
                                    <li> 7-Page Website</li>
                                    <li> Free SSL</li>
                                    <li> Free 50 email IDs</li>
                                    <li> Chatbot</li>
                                </ul>
                                <div className='px-5'>
                                    <button type='button' className='btn w-100 btn-lg'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default MainSection



























{/* <div className='container'>
                        <div className='row'>
                            <div className='col-md-4 col-12'>
                                <div className='card container mt-3 mb-1 pt-3 pb-3'>
                                    <div className='card-body rounded-3'>
                                        <div className=''>
                                            <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>{this.props.name}</h1>
                                            <h2><span>Rs.</span> 3999</h2>
                                            <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                            <ul className='list-unstyled'>
                                                <li> 1-Page Website</li>
                                                <li> Free SSL</li>
                                            </ul>
                                            <div className='px-5'>
                                                <button type='button' className='btn btn-lg mt-5 w-100 border-secondary'>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-12'>
                                <div className='card container mt-3 mb-1 pt-3 pb-3'>
                                    <div className='card-body rounded-3'>
                                        <div className=''>
                                            <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>{this.props.name}</h1>
                                            <h2><span>Rs.</span> 3999</h2>
                                            <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                            <ul className='list-unstyled'>
                                                <li> 1-Page Website</li>
                                                <li> Free SSL</li>
                                            </ul>
                                            <div className='px-5'>
                                                <button type='button' className='btn btn-lg mt-5 w-100 border-secondary'>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-12'>
                                <div className='card container mt-3 mb-1 pt-3 pb-3'>
                                    <div className='card-body rounded-3'>
                                        <div className=''>
                                            <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>{this.props.name}</h1>
                                            <h2><span>Rs.</span> 3999</h2>
                                            <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                                            <ul className='list-unstyled'>
                                                <li> 1-Page Website</li>
                                                <li> Free SSL</li>
                                            </ul>
                                            <div className='px-5'>
                                                <button type='button' className='btn btn-lg mt-5 w-100 border-secondary'>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> */}
