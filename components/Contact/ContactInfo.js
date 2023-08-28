import React, { Component } from 'react';
import Link from 'next/link'

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70 text-center">
                <p>Contact Information</p>
                <h2>Let's Plan A Meeting</h2>
                <p>It's the right time to start a project with our team of professionals and bring the ideas into reality,
                     more efficiently and effectively. Let us help you to ensure enterprise success through technological
                     and Digital Transformation with AI and Automation Services and solutions that we develop.
                </p>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-location-plus"></i>
                                <h3>Location</h3>
                                <p>VISIT TO EXPLORE THE WORLD</p>
                                <br/>
                                <h6>264-A main college road UET housing society, Lahore</h6>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Make a Call</h3>
                                <p>LET'S TALK WITH OUR EXPERTS</p>
                                <br/>
                                <h6>04232326502</h6>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Send a Mail</h3>
                                <p>DON'T HESITATE TO MAIL</p>
                                <br/>
                                <h6>info@odoo-ai.com</h6>
                            </div>
                        </div>

                    </div>
                    
                    <br/>

                    <div className="row">
                        <div className="col-lg-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInput"><h6>Your Name</h6></label>
                                <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp" placeholder="Name Here"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInput" class="form-label"><h6>Email Address</h6></label>
                                <input type="email" class="form-control" id="exampleInput" placeholder="Email Address"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label"><h6>Subject</h6></label>
                                <input type="text" class="form-control" id="exampleInput" placeholder="Subject"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInput" class="form-label"><h6>Message</h6></label>
                                <input type="text" class="form-control" id="exampleInpu" placeholder="Message goes here"/>
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-primary">Send Your Message</button>
                        </form>
                        </div>
                
                        <div className="col-lg-6">
                            <div className="about-img">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.156289277303!2d74.26957801514
                            793!3d31.40981978140627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa76ccca835a19297!2z
                            MzHCsDI0JzM1LjQiTiA3NMKwMTYnMTguNCJF!5e0!3m2!1sen!2s!4v1648394855547!5m2!1sen!2s" width="500" height="400"  allowfullscreen="" ></iframe>
                            </div>
                        </div>

                    </div>
                </div>

                
            </div>
        );
    }
}

export default ContactInfo;