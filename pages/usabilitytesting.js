import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Link from 'next/link';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/HomeOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';

class Index4 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Useability Testing" 
                    homePageUrl="/"
                />
                {/* <MakeYourBusiness /> */}
                {/* <Testimonials /> */}
                {/* <TeamTwo /> */}
                <div className="pb-50">
                    {/* <Partner /> */}
                </div>
                {/* <About /> */}

                <br/>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/t.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2>Guarantees to make the applications more reliable
                                    through usability testing services
                                </h2>
                                <p>Through usability testing, convenience, learning, and ease of using the applications
                                    and websites are established for the customers. Our team of experts works to fulfill
                                    the needs of the clients and the users ensuring that the designs matches the functionality.
                                    The comprehensive usability testing delivers a report after a thorough audit categorizing the
                                    issues, bugs, and flaws according to the severity.
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
                <h5>Benefits of usability testing</h5>
                  <ul>
                      <li>Comprehensive solutions include the evaluation according to the user's perspective of intended and real 
                          users while taking the usability.</li>
                      <li>The benefit of defined, productive and unique approaches and procedures focuses on the user experience 
                          and interface.</li>
                      <li>Usability tests for mobile applications and websites will be utilized by using the tools.</li>
                      <li>Effective,reliable, and efficient usability services help to manage the support and maintenance.</li>
                      <li>Extensive testing analyzes and records the experience of users and their behaviors</li>
                  </ul>
                </div>
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index4;