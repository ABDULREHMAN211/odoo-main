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
                    pageTitle="Custom Software Development" 
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
                                <img src="/images/ccc.png" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                            <h2>Develop powerful custom software and application for every business </h2>
                               <p>Get the best and adequate custom software development services from the leading Odoo-Al company 
                                   providing the right solutions and lets you gain yielding results in workflow management minimize 
                                   security risks and tailor-made maintenance and support. Our team of experts aims to resolve particular 
                                   business needs with a full-fledged framework and endless solutions. The high quality and well-developed 
                                   custom software offer many benefits to every business with adequate involved technologies for daily operations.  
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
                    <br/>
                    <br/>
                    <div>
                        <h2>Benefits of Cutom Software Development</h2>
                        <ul>
                            <li>Reliable Development Solutions</li>
                            <li>Product Development</li>
                            <li>Maintenance Services</li>
                            <li>App Integration</li>
                        </ul>
                        <br/>
                        <h2>Why Us For Custom Software Development</h2>
                        <ul>
                            <li>Custom Business Software</li>
                            <li>Custom Portal Development</li>
                            <li>Real-time Applications</li>
                            <li>App Integration</li>
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