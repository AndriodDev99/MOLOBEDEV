import { Button } from 'bootstrap'
import React from 'react'
import Typical from 'react-typical'
import './Profile.css';
import Contact from './Contact'

export default function Profile() {
    return (
        <div className='profile-container' id='Profile'className="max-w-screen-lg p-4 mx-auto  flex flex-col 
        justify-center w-full h-screen">
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='+27614697684'>
                            <i  className="fa fa-phone"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/Faith-Nyayi'>
                            <i class="fa fa-linkedin"></i>
                        </a>
                        <a href='https://www.faithnyayi@gmail.com'>
                            <i class="fa fa-envelope"></i>
                        </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {''}
                          Welcome, I'm <span className='highlighted-text'>Faith Nyayi</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                {''}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Natural Leader",
                                        1000,
                                        "Visionary Strategist",
                                        1000,
                                        "Trusted Advisor",
                                        1000,
                                        "Transformer",
                                        1000,
                                    ]} />
                            </h1>
                            <span className='profile-role-tagline'>
                            Learning, Organizational Development and Transformation Specialist  
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                   <a href={Contact}> <button className='btn primary-btn cursor-pointer'>
                            {''}
                            Work With Me{''}
                        </button></a>
                        <a href='FAITHRESUME.pdf' download='Faith Nyayi.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
