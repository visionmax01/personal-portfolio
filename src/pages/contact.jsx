import React from 'react';
import Nav from '../components/nav';
import '../css/contact.css'

const Contact = () => {
    return (
        <div>
            <Nav/>
            <div class="ContactSection text-white">
        <div class="shadowOnfirstBg1"></div>
        <div class="containtDetailPage">
              <div class="smallScreen">                
                  <div class="imagesectionme">
                    <img src="./img/my-pic.jpg" alt="Profile Picture"/>
                </div>
                    <div class="socialMediaSM">
                        <a href="https://www.instagram.com/bhishansah/" className="SocialIcon instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/919728161275?text=Hello!%20How%20are%20you." target="_blank" class="SocialIcon whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://github.com/visionmax01" className="SocialIcon github"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/bhishansah/" className="SocialIcon linkdin"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
              </div>
            <div className="contactChild1">
                <div className="infoCnt">
                    <div className="naMEPLATE">
                        <h1>BHISHAN SAH</h1>
                    </div>
                    <div className="imagesection">
                        <img src="./img/my-pic.jpg" alt="Profile Picture"/>
                    </div>
                    <div className="contactDetail">
                        <div className="iconContactpage">
                            <p><i class="bx bxl-gmail"></i></p>
                            <p><i class="fa-solid fa-phone"></i></p>
                            <p><i class="fa-solid fa-location-dot"></i></p>
                        </div>
                        <div className="contactdetailSection">
                            <p>bhishansah@gmail.com</p>
                            <p>+91-9728161275, +977-9819931223</p>
                            <p>Lahan-7, Siraha, Nepal 540056<br />Near Durga Mandir Temple</p>
                        </div>
                    </div>
                </div>
                <div className="medisSection">
                    <h2>Social Media Links</h2>
                    <div className="leftsideinfo"></div>
                    <div className="socialMedia">
                        <a href="https://www.instagram.com/bhishansah/" className="SocialIcon instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://wa.me/919728161275?text=Hello!%20How%20are%20you." target="_blank" class="SocialIcon whatsapp" className="SocialIcon whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://github.com/visionmax01" className="SocialIcon github"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/bhishansah/" className="SocialIcon linkdin"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    
                </div>

            </div>
            <div class="contactChild2">
                <div class="ContactMeForm">
                    <h1 class="text-center mt-2">Leave your message. </h1>
                    <form class="formSection" action="">
                        <div class="formGroup">
                            <div class="groupsection">
                                <label for="name">Name</label><br/>
                                <input type="text" name="name" placeholder="Enter your name" id="name"/>
                            </div>
                            <div class="groupsection">
                                <label for="email">Email</label><br/>
                                <input type="email" name="email" placeholder="Enter your email" id="email"/>
                            </div>
                        </div>

                        <div class="formGroup">
                            <div class="groupsection">
                                <label for="phoneNo">Phone No</label><br/>
                                <input type="text" name="phoneNo" placeholder="Enter your phone number" id="phoneNo"/>
                            </div>
                            <div class="groupsection">
                                <label for="message">Message</label><br/>
                                <textarea name="message" placeholder="Leave your message.." id="message"></textarea>
                            </div>
                        </div>
                        <button class="btnSentSMS">Send Message</button>

                    </form>
                </div>
                <div class="ContactDetail">
                   <div>
                    <h1>Info.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos porro repellendus quia accusantium laudantium error velit, fuga explicabo ducimus iusto ut exercitationem similique in aliquid laboriosam natus, illum sapiente repudiandae consequuntur quisquam beatae maiores sit amet? Debitis iste, suscipit distinctio velit quae ipsa in molestiae labore, doloribus repellat, recusandae aut.3</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Contact;
