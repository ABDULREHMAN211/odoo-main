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
                    pageTitle="Web Development" 
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
                                <img src="/images/wiii.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                            <h2>Add value to the business with prime and powerful web development </h2>
                               <p>Get the best web development services from the renowned company to get efficient web 
                                   products to boost brand awareness and engage more audiences with the web development 
                                   services. The team of professionals cater to the needs and enhance the experience with 
                                   the web development services including web application, custom website development, 
                                   eCommerce development, web application development, and CMS development. 
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
                        <h2>Why us for the Web Development</h2>
                        <ul>
                            <li>Custom Business Web Development</li>
                            <li>Web Portals</li>
                            <li>Web Maintenance</li>
                            <li>Electronic Commerce</li>
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