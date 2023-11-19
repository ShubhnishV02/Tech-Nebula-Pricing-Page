import React, { Component } from 'react';
import Box from './box';

class MainSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolio: [
                {
                    name: "Classic",
                    price: "3,999",
                    Feature1: "1-Page Website",
                    Feature2: "Free SSL",
                    buttonClass: "btn btn-lg mt-5 w-100 border-secondary",
                },
                {
                    name: "Modern",
                    price: "5,999",
                    Feature1: "2-Page Website",
                    Feature2: "Free SSL",
                    Feature3: "Free 20 email IDs",
                    buttonClass: "btn btn-lg mt-4 w-100 border-secondary",
                },
            ],
            BusinessWebsite: [
                {
                    name: "Classic",
                    price: "7,999",
                    Feature1: "3-Page Website",
                    Feature2: "Free SSL",
                    buttonClass: "btn btn-lg mt-5 w-100 border-secondary",
                },
                {
                    name: "Modern",
                    price: "11,999",
                    Feature1: "5-Page Website",
                    Feature2: "Free SSL",
                    Feature3: "Free 20 email IDs",
                    buttonClass: "btn btn-lg mt-4 w-100 border-secondary",
                },
                {
                    name: "Super Modern",
                    price: "19,999",
                    Feature1: "7-Page Website",
                    Feature2: "Free SSL",
                    Feature3: "Free 50 email IDs",
                    Feature4: "Chatbot",
                    buttonClass: "btn btn-lg w-100 border-secondary",
                },
            ],
            EcommerceWebsite: [
                {
                    name: "Classic",
                    price: "9,999",
                    Feature1: "3-Page Website",
                    Feature2: "Free SSL",
                    buttonClass: "btn btn-lg mt-5 w-100 border-secondary",
                },
                {
                    name: "Modern",
                    price: "13,999",
                    Feature1: "5-Page Website",
                    Feature2: "Free SSL",
                    Feature3: "Free 20 email IDs",
                    buttonClass: "btn btn-lg mt-4 w-100 border-secondary",
                },
                {
                    name: "Super Modern",
                    price: "21,999",
                    Feature1: "7-Page Website",
                    Feature2: "Free SSL",
                    Feature3: "Free 50 email IDs",
                    Feature4: "Chatbot",
                    buttonClass: "btn btn-lg w-100 border-secondary",
                },
            ]

        };
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
                            <Box name={this.state.portfolio[0].name} price={this.state.portfolio[0].price} Feature1={this.state.portfolio[0].Feature1} Feature2={this.state.portfolio[0].Feature2} Feature3={this.state.portfolio[0].Feature3} buttonClass={this.state.portfolio[0].buttonClass} />
                        </div>
                        <div className='column-divided-middle rounded-3'>
                            <Box name={this.state.portfolio[1].name} price={this.state.portfolio[1].price} Feature1={this.state.portfolio[1].Feature1} Feature2={this.state.portfolio[1].Feature2} Feature3={this.state.portfolio[1].Feature3} buttonClass={this.state.portfolio[1].buttonClass} />
                        </div>
                    </div>


                    <div className='divider-line'>
                        <h3 className='text-center mt-5 mb-4'>Business Website</h3>
                    </div>
                    <div className='column-divided-into-three-parts container mt-3 mb-1 pt-2 pb-4'>
                        <div className='column-divided-left rounded-3'>
                        <Box name={this.state.BusinessWebsite[0].name} price={this.state.BusinessWebsite[0].price} Feature1={this.state.BusinessWebsite[0].Feature1} Feature2={this.state.BusinessWebsite[0].Feature2} Feature3={this.state.BusinessWebsite[0].Feature3} buttonClass={this.state.BusinessWebsite[0].buttonClass} />
                        
                        </div>
                        <div className='column-divided-middle rounded-3'>
                        <Box name={this.state.BusinessWebsite[1].name} price={this.state.BusinessWebsite[1].price} Feature1={this.state.BusinessWebsite[1].Feature1} Feature2={this.state.BusinessWebsite[1].Feature2} Feature3={this.state.BusinessWebsite[1].Feature3} buttonClass={this.state.BusinessWebsite[1].buttonClass}  />
                        
                        </div>
                        <div className='column-divided-right rounded-3'>
                        <Box name={this.state.BusinessWebsite[2].name} price={this.state.BusinessWebsite[2].price} Feature1={this.state.BusinessWebsite[2].Feature1} Feature2={this.state.BusinessWebsite[2].Feature2} Feature3={this.state.BusinessWebsite[2].Feature3} Feature4={this.state.BusinessWebsite[2].Feature4}  buttonClass={this.state.BusinessWebsite[2].buttonClass}  />
                        
                        </div>

                    </div>


                    <div className='divider-line3'>
                        <h3 className='text-center mt-5 mb-4'>E-commerce Website</h3>
                    </div>
                    <div className='column-divided-into-three-parts container mt-3 mb-1 pt-2 pb-4'>
                        <div className='column-divided-left rounded-3'>
                        <Box name={this.state.EcommerceWebsite[0].name} price={this.state.EcommerceWebsite[0].price} Feature1={this.state.EcommerceWebsite[0].Feature1} Feature2={this.state.EcommerceWebsite[0].Feature2} Feature3={this.state.EcommerceWebsite[0].Feature3} Feature4={this.state.EcommerceWebsite[0].Feature4}  buttonClass={this.state.EcommerceWebsite[0].buttonClass}  />
                        
                        </div>
                        <div className='column-divided-middle rounded-3'>
                        <Box name={this.state.EcommerceWebsite[1].name} price={this.state.EcommerceWebsite[1].price} Feature1={this.state.EcommerceWebsite[1].Feature1} Feature2={this.state.EcommerceWebsite[1].Feature2} Feature3={this.state.EcommerceWebsite[1].Feature3} Feature4={this.state.EcommerceWebsite[1].Feature4}  buttonClass={this.state.EcommerceWebsite[1].buttonClass}  />
                        
                        </div>
                        <div className='column-divided-right rounded-3 mb-5'>
                        <Box name={this.state.EcommerceWebsite[2].name} price={this.state.EcommerceWebsite[2].price} Feature1={this.state.EcommerceWebsite[2].Feature1} Feature2={this.state.EcommerceWebsite[2].Feature2} Feature3={this.state.EcommerceWebsite[2].Feature3} Feature4={this.state.EcommerceWebsite[2].Feature4}  buttonClass={this.state.EcommerceWebsite[2].buttonClass}  />
                        
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default MainSection

