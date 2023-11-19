import React from 'react';

function Box(props) {
    return (
        <div>
            <div>
                <h1 className='border-bottom border-top py-3 bg-light rounded-top-3'>{props.name}</h1>
                <h2><span>Rs.</span> {props.price}</h2>
                <p><i className='fa fa-gift'>&nbsp;</i>Features</p>
                <ul className='list-unstyled'>
                    <li> {props.Feature1}</li>
                    <li> {props.Feature2}</li>
                    <li> {props.Feature3}</li>
                    <li> {props.Feature4}</li>
                </ul>
                <div className='px-5'>
                    <button type='button' className={props.buttonClass}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Box