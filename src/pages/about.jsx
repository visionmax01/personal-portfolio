import React from 'react';
import '../css/about.css';
import Footer from '../components/footer';

// Import images
import myppimage from '/img/myppimage.jpg';
import myPic from '/img/my-pic.jpg';
import myimage1 from '/img/myimage1.jpg';
import myimage2 from '/img/myimage2.jpg';
import littleStarSchool from '/img/little-star-english-school.jpg';
import technicalEducationCollege from '/img/technical-education-college.jpg';
import rkuniversity from '/img/rkuniversity.jpg';
import reading from '/img/reading.png';
import running from '/img/running.png';
import cooking from '/img/cooking.png';
import movies from '/img/movies.png';
import netflix from '/img/netflix.png';
import coding from '/img/coding.jpg';
import traveling from '/img/traveling.jpg';
import Nav from '../components/nav';

const About = () => {
    return (
        <div>
            <Nav/>
            <div className="abouteConaint">
                <div className="infoSectionAbout">
                    <div className="firstHeadingAbout">
                        <div className="straightLine"></div>
                        <div className="INTROabout">
                            <h1>ABOUT <span>ME</span></h1>
                            <span>ALLOW ME TO INTRODUCE MYSELF</span>
                        </div>
                    </div>

                    <div className="SecondHeadingAbout">
                        <div className="imageSectionAboute">
                            <img src={myppimage} alt="Profile" />
                            <img src={myPic} alt="Profile" />
                            <img src={myimage1} alt="Profile" />
                            <img src={myimage2} alt="Profile" />
                            <h3 className="infoHoverIMG">Hover Mouse Pointer on Image to see.</h3>
                        </div>
                        <div className="SMimageSectionAboute">
                            <img className="image1" src={myppimage} alt="Profile" />
                            <img className="image2" src={myimage1} alt="Profile" />
                            <img className="image3" src={myimage2} alt="Profile" />
                        </div>
                        <div className="abouteMeSection">
                            <h1 className="md:text-2xl text-lg text-center uppercase font-extrabold">Introduction</h1>
                            <p className="mb-4">I'm a web developer who is passionate about building beautiful and functional websites. I'm also
                                passionate about learning new technologies and new ways of doing things.</p>
                        </div>
                    </div>
                    <div className="EducationSection">
                        <h2 className="md:text-2xl text-xl text-center uppercase font-extrabold ml-2">Education</h2>
                        <div className="educationDetail">
                            <div className="tenthClass">
                                <div>
                                    <i className="fa-solid fa-school"></i>
                                    <h1>10th Class</h1>
                                </div>
                                <ul>
                                    <h3>Little Star Higher Secondary English Boarding School</h3>
                                    <li><i className="fa-solid fa-location-dot"></i> Lahan-7, Siraha, Nepal, pincode - 56500</li>
                                    <li>Major Subject - <strong>Science & English</strong></li>
                                    <li>Passed year - <strong>2016</strong> A.D</li>
                                    <li>Grade Percentage - <strong>67%</strong></li>
                                    <li>Grade - <strong>2.68</strong> GPA</li>
                                </ul>
                            </div>
                            <div className="imageVies">
                                <div className="imageSection">
                                    <img src={littleStarSchool} alt="Little Star School" />
                                    <button className="buttoncertificat">View Certificates</button>
                                </div>
                            </div>
                        </div>

                        <div className="educationDetail">
                            <div className="tenthClass">
                                <div>
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    <h1>Diploma in Mechanical Engineering</h1>
                                </div>
                                <ul>
                                    <h3>Srm Global Institute of Technical Education "HSBTE BOARD"</h3>
                                    <li><i className="fa-solid fa-location-dot"></i> Village-Bhurewala, Naraingarh, Ambala, Haryana, pincode - 134203</li>
                                    <li>Major Subject - <strong>Drawing & AutoCAD</strong></li>
                                    <li>Enrollment No - <strong>160741700046</strong></li>
                                    <li>Passed year - <strong>2019</strong> A.D</li>
                                    <li>Grade Percentage - <strong>69%</strong></li>
                                    <li>Grade - <strong>2.76</strong> GPA</li>
                                    <li>Website URL - <a className="text-red-700" href="https://hsbte.org.in/">https://hsbte.org.in/</a></li>
                                </ul>
                            </div>
                            <div className="imageVies">
                                <div className="imageSection">
                                    <img src={technicalEducationCollege} alt="Technical Education College" />
                                    <button className="buttoncertificat">View Certificates</button>
                                </div>
                            </div>
                        </div>

                        <div className="educationDetail">
                            <div className="tenthClass">
                                <div>
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    <h1>B-Tech in Computer Engineering</h1>
                                </div>
                                <ul>
                                    <h3>RK University</h3>
                                    <li><i className="fa-solid fa-location-dot"></i> Village-Tramba, Rajkot, Gujarat, pincode - 360020</li>
                                    <li>Major Subject - <strong>Software Engineering</strong></li>
                                    <li>Enrollment No - <strong>21SOECE11636</strong></li>
                                    <li>Passed year - <strong>2025</strong> A.D</li>
                                    <li>Grade Percentage - <strong>74%</strong> up to 6th sem only</li>
                                    <li>Grade - <strong>7.4</strong> GPA (update on completion of degree)</li>
                                    <li>Website URL - <a className="text-red-700" href="https://rku.ac.in/">https://rku.ac.in/</a></li>
                                </ul>
                            </div>
                            <div className="imageVies">
                                <div className="imageSection">
                                    <img src={rkuniversity} alt="RK University" />
                                    <button className="buttoncertificat">View Certificates</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experianceSection">
                        <div className="sectionExperiance">
                            <h2 className="headingAboute geadingExp text-white">EXPERIENCE</h2>
                            <ul>
                                <li><strong>1 Year</strong> Experience in user account management at Vianet Communication Pvt. Ltd.</li>
                                <li><strong>2 Years</strong> of field experience with knowledge of wiring, connection & layout designing.</li>
                                <li><strong>8 Months</strong> of experience as supervisor at Shree Krishna Distribution Janakpur.</li>
                            </ul>
                        </div>
                        <div className="sectionCertificate">
                            <h2 className="headingAboute geadingExp text-white">CERTIFICATES</h2>
                            <ul>
                                <li><strong>8 Months</strong> Experience certificate of mechanical at Shree Krishna Distribution Mahendra Company.</li>
                                <li>CISCO Networking</li>
                                <li>Java Language Features</li>
                                <li>Java Programming Fundamentals</li>
                                <li>Java SE 8 Features</li>
                            </ul>
                        </div>
                    </div>
                    <div className="thirdHeadingAbout">
                        <div className="thingsIlove">
                            <h1 className="title text-center">THINGS I LOVE</h1>
                            <div className="containtLOVE">
                                <img src={reading} alt="Reading" />
                                <img src={running} alt="Running" />
                                <img src={cooking} alt="Cooking" />
                                <img src={movies} alt="Movies" />
                                <img src={netflix} alt="Netflix" />
                                <img src={coding} alt="Coding" />
                                <img src={traveling} alt="Traveling" />
                            </div>
                        </div>
                        <div className="thingsIDo">
                            <h1 className="title text-center">LOOK WHAT I CAN DO</h1>
                            <div className="mainComponent">
                                <div className="thingILoveDO1">
                                    <div className="thingsIdo1">
                                        <span>+</span>
                                        <p>Web Designing</p>
                                    </div>
                                    <div className="thingsIdo1">
                                        <span>+</span>
                                        <p>UI / UX Designing</p>
                                    </div>
                                    <div className="thingsIdo1">
                                        <span>+</span>
                                        <p>Familiar with React/Vite</p>
                                    </div>
                                    <div className="thingsIdo1">
                                        <span>+</span>
                                        <p>Familiar with Laravel</p>
                                    </div>
                                    <div className="thingsIdo1">
                                        <span>+</span>
                                        <p>App Development: Flutter & React Native</p>
                                    </div>
                                </div>
                                <div className="thingILoveDO1">
                                    <div className="thingILoveDO2">
                                        <div className="thingsIdo1">
                                            <span>+</span>
                                            <p>PhotoShop PSD Designing</p>
                                        </div>
                                        <div className="thingsIdo1">
                                            <span>+</span>
                                            <p>Video Editing</p>
                                        </div>
                                        <div className="thingsIdo1">
                                            <span>+</span>
                                            <p>API Integrity & Creating APIs</p>
                                        </div>
                                        <div className="thingsIdo1">
                                            <span>+</span>
                                            <p>Full Stack Web Development</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
