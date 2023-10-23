import React from 'react'
import Typical from 'react-typical'
import './Profile.css';

export default function Profile(){
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                     <a href='https://www.linkedin.com/in/vineeth-pulimaradka-601206263/'>
                        <i className='fa fa-linkedin'></i>
                     </a>
                     <a href='https://github.com/vineethpulimaradka'>
                        <i className='fa fa-github'></i>
                     </a>
                     <a href='https://www.instagram.com/vineeth_pulimaradka/'>
                        <i className='fa fa-instagram'></i>
                     </a>
                     <a href='https://www.youtube.com/channel/UC46cVDTvMJTTHtH9CxuhMuA'>
                        <i className='fa fa-youtube-square'></i>
                     </a>
                     <a href='#'>
                        <i className='fa fa-twitter'></i>
                     </a>

                            </div>
                    </div>  
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Vineeth Pulimaradka</span>
                        </span>
                        </div>  

                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                {" "}
                                <h1>
                                    {" "}
                                    <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Dev 💻",
                                        1000,
                                        "Full Stack Developer 📝",
                                        1000,
                                        "MERN Stack Dev 🛠️",
                                        1000,
                                        "Cross Platform v 📚",
                                        1000,
                                        "React/React Native Dev 🚀",
                                        1000,
                                    ]}
                                    />

                                </h1>
                                <span className='profile-role-tagline'>
                                    knack of building applications with front and back end operations.
                                </span>
                            </span>
                            </div>  
                            <div className='profile-options' >
                                <button className='btn primary-btn'>
                                    {""}
                                    Hire Me{" "}
                                </button>
                                <a href='VINEETH P L resumemini.pdf'download="VINEETH P L resumemini.pdf">
                                    <button className="btn highlighted-btn">Get Resume</button>
                                </a>
                                </div>        
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>  

        </div>
    );
}