import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/HomeOne/About';
import Link from 'next/link';

import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';

class Contact2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Manual Testing" 
                    homePageUrl="/"
                />
                {/* <MakeYourBusiness /> */}
                {/* <Testimonials /> */}
                {/* <TeamTwo /> */}
                <div className="pb-50">
                    {/* <Partner /> */}
                </div>
                {/* <About /> */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/man.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2>Seamless, flawless, and well-tested applications are launched through manual 
                                    testing performed by a team of experts</h2>
                                <p>
                                    Through manual testing, the defects and flaws in various applications are recognized by
                                    utilizing human characteristics such as inferences, instincts, and logical reasoning. We
                                    provide a result oriented and unique set of tools, technology expertise, and processes in
                                    the testing field to guarantee high-end products in a short span.
                                </p>
                               
                                <div className="row">
                                    
                                </div>

                                <Link href="/about-1">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-3'>
                <h5>Benefits of Manual Testing</h5>
                  <ul>
                      <li>Creativity</li>
                      <li>Flexibility</li>
                      <li>Cost-Effectiveness</li>
                  </ul>
                
                  <h5>Why us for Manual Testing</h5>
                  <ul>
                      <li>Extensive coverage</li>
                      <li>Technical proficiency</li>
                      <li>Flexible delivery models</li>
                      <li>Industry expertise</li>
                  </ul>
                </div>
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact2;