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
                    pageTitle="Development" 
                    homePageUrl="/"
                />

                <br/>
                <br/>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-4">
                            <div className="about-content">
                            <h2>Explore high-end quality digital development transformation solutions for your business</h2>
                               <p>
  
                                </p>
                                <Link href="/about-1">
                                    <a className="default-btn">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <br/>
                            <br/>
                            <p>The IT services and solutions are customized according to the digital tech needs to make all 
                                types of business disruption proof and competitive. The emerging solutions help to maximize 
                                ROI, enhance customer experiences and enable to explore revenue streams. All enterprise 
                                solutions and services are implemented to offer tangible results and upgrade the business 
                                with development service! </p>
                                <h5>Industries catered for the Development </h5>
                            <p>
                            Odoo-Al is a reputed and renowned mobile and web development company that serves great mobile apps to its clients. 
                            Our team utilizes a unique approach and caters to the needs of clients to develop a perfect tailor-made app for the 
                            client. The diverse apps with exceptional features for the following industry are offered. 
                            </p>
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="about-img">
                                <img src="/images/x.jpg" alt="Image" />
                            </div>
                            <div>
                                <p>
                                The diverse apps with exceptional features for the following industry are offered.
                                </p>
                                <ul>
                                    <li>Healthcare</li>
                                    <li>Transportation</li>
                                    <li>Sports</li>
                                    <li>Education</li>
                                    <li>Banking</li>
                                    <li>Retail</li>
                                    <li>Government</li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>
                    <br/>
                    <br/>

                    <div>
                        <h3>Services we provide</h3>
                        <ul>
                            <li>Mobile App Development</li>
                            <li>Web Development</li>
                        </ul>
                    </div>
                </div>
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index9;