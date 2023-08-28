import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link'
import About from '../components/HomeOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';

class Index9 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Quality Assurance" 
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
                            <div className="about-content">
                            <h2>Quality Assurance Sternly QA tested software solutions to deliver excellence </h2>
                               <p>All types of businesses and enterprises demand perfection and precision in their 
                                   applications which means they want to advance their software with reliable testing
                                    services, conventional QA, and methodologies. The high-end service guarantees application 
                                    reliability with a flawless and unique user experience. The aim is to provide software 
                                    services and solutions enabling various businesses to cope with the dynamic changes in the 
                                    technological industry. Our testing and QA services are uniquely designed with lower 
                                    development costs, speed up time to market, minimizes business and technical risks 
                                    according to the comprehensive requirements of clients. Our team of experts performs 
                                    software testing with a focused methodology to help clients to improve time to enhance 
                                    ROI and market values. 
  
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
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/q.jpg" alt="Image" />
                            </div>
                        </div>

                        
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <h2>Empower your business with QA & Testing Services</h2>
                        <ul>
                            <li><h4>Automated Testing</h4></li>
                            <li><h4>Mobile Testing</h4></li>
                        </ul>
                        <br/>
                        
                        <div className="row align-items-center">
                    <div className="col-lg-6">
                           
                               
                            <h2>Technologies That We Use</h2>
                        <ul>
                            <li>Hadoop and other Big data platforms</li>
                            <li>Licensed OCR Tools</li>
                            <li>Luigi workflow manager</li>
                            <li>Distributed setup on Cloud for speed</li>
                            <li>Django framework</li>
                        </ul>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="about-img">
                                <br/>
                                <br/>
                                <img src="/images/big.jpeg" alt="Image" />
                            </div>
                        </div>
                    
                    </div>
                        
                        
                    </div>
                </div>
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index9;