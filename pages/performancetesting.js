import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/HomeOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';

class About2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Performance Testing" 
                    homePageUrl="/"
                />
                {/* <MakeYourBusiness /> */}
                {/* <Testimonials /> */}
                {/* <TeamTwo /> */}
                <br/>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/p.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2>Get flawless systems to handle business-critical and peak loads</h2>
                                <p>
                                    Through performance testing, validation, verification, and analysis are performed under the
                                     unexpected and expected workload. To make the business performance reliable and consistent,
                                     it is essential to deal with the performance issues. Our team of experts offers high-quality
                                     testing services to manage the application performance under specific conditions or normal 
                                     consequences. Our teams owns expertise in e-commerce applications, social media, web portals,
                                      SaaS, and enterprise applications with ECM, CRM, and ERP solutions.
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
                <div className="pb-50">
                    {/* <Partner /> */}
                </div>
                {/* <About /> */}
                
                <div className='p-3'>
                <h5>Benefits of Performance Testing</h5>
                  <ul>
                      <li>Enhanced speed and accuracy.</li>
                      <li>Quick scalability plans</li>
                      <li>Cost-efficient</li>
                      <li>Documentation</li>
                  </ul>
                  
                </div>
                <div className='p-3'>
                <h5>Why Us for Performance Testing</h5>
                  <ul>
                      <li>Load Testing.</li>
                      <li>Scalability Testing</li>
                      <li>Stress Testing</li>
                      <li>Stability Testing</li>
                  </ul>
                  
                </div>
                
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
        );
    }
}

export default About2;