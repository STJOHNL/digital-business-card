import React from 'react'
import profilePic from '../assets/profile.jpeg'

export default function Info() {
    return (
        <div className='info-container'>
            <img src={profilePic} className='info--img' />
            <h1 className='info--name'>Logan St. John</h1>
            <h5 className='info--subtitle'>Software Developer</h5>
            <a href='https://www.devtivity.com' target='_blank' className='info--website'>devtivity.com</a>
            <div className='info--inner-container'>
                <a href="mailto:logan@devtivity.com" className='info--email'><i className="fa-solid fa-envelope"></i>Email</a>
                <a href="https://www.linkedin.com/in/logan-st-john-665709200/" target='_blank' className='info--linkedin'><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}
