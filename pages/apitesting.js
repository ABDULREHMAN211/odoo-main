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

class Index6 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="API Testing" 
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
                                <img src="/images/app.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2>Let smooth the development workflow with API services.</h2>
                                <p>
                                    API testing is a deep and thorough approach as compared to other types of testing. The specialist
                                    always help with API testing to make the software and application secure and reliable. API testing is the
                                    essential process of software development and process to be a challenging process. It creates, formulates and
                                     sends requests according to the UI design so that the API functions adequately.
                                </p>
                                <p>
                                    Only a professional can understand the complexity of APIs because API software owns classes, functions and
                                     subprograms by which software interacts with other applications. Our team of experts makes it necessary to
                                      understand and ensure that API works correctly and fulfills the purpose across diverse operating systems,
                                      browsers and devices.
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
                <div className='p-3'>
                <h5>Benefits of API Testing</h5>
                <ul>
                    <li>Core access</li>
                    <li>Strong protection</li>
                    <li>Time and cost-effective</li>
                </ul>
                </div>
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index6;