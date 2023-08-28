import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import link from 'next/link'
import About from '../components/HomeOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';

class Index5 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Mobile Testing" 
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
                                <img src="/images/m.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <h2>Get flawless experience with reliable mobile testing for IOS and Android apps.</h2>
                                <p>
                                    Thorough mobile testing, functional and non-functional features of different applications operating on
                                    different mobile devices, operating systems, aspect ratios, and network carriers. Our team of experts concludes
                                    mobile testing services involving mobile web testing, usability, security testing, penetration, accessiblity, mobile
                                     application testing, mobile localization testing, and cloud-based testing.
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
                <h5>Mobile Testing Benefits</h5>
                  <ul>
                      <li>Testing with devices.</li>
                      <li>End-user experience.</li>
                      <li>Cost-Effectiveness.</li>
                      <li>Tools experts.</li>
                  </ul>
                </div>
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
        );
    }
}

export default Index5;