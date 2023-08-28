import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingStyleOne from '../components/Pricing/PricingStyleOne';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Footer from '../components/Layouts/Footer';
import Appdevelopment from './appdevelopment'
import Link from 'next/link'

class awdevelopment extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Web And Mobile Development" 
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
            <br/>
            {/* mobile app */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/man.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                            <h2>Create high quality and feature-rich mobile apps</h2>
                               <p>With the advancement of technology, mobile applications are essential because they serve as a 
                                    powerful business tool. Mobile applications enhance productivity, increase customer base and add 
                                    value to every business. With iPhone and Android, the demand for Android and iOS apps are increasing. With the experts and professionals, we own years of experience to develop feature-rich applications for various platforms and with several technologies. 
                                </p>
                                <p>
                                The team tries its best to fulfills the tailor-made requirements of customers and offers feasible 
                                solutions that match the demand. For the high-end user experience, we try to craft apps for the aspiring
                                startup, well-known company, or for the established brand in the most personalized and interactive way. 
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
                <h5>Benefits of reliable mobile app development solutions</h5>
                <p> Odoo Ai offers reliable solutions to transform business ideas into excellent and unique user interface
                    to establish apps that are capable to connect with consumers.
                </p>
                <h5>Android App Development</h5>
                <p>The most fexible and demanding platform is the Android app development that is utilized by millions
                    of people worldwide. The company follows elevating approach, strengthening flexible solutions, seemless
                    experience, and build apps to enhace consumer loyalty. The android app development posses expertise in the
                     following
                </p>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                           <h5>Languages</h5>
                           <ul>
                               <li>Java, Python</li>
                               <li>C,C++</li>
                           </ul>
                        </div>
                        <div class="col-sm">
                            <h5>Frameworks</h5>
                            <ul>
                                <li>PhoneGap, React Native</li>
                                <li>Sancha Touch, Ionic</li>
                            </ul>
                        </div>
                        <div class="col-sm">
                           <h5>Development Tools</h5>
                           <li>Android IDE</li>
                           <li>Android Studio</li>
                        </div>
                    </div>
                </div>

                <h5>IOS App Development</h5>
                <p>IOS developers create high-end apps capable to reach loyal and genuine customers globally. The expert team
                    uses the latest platforms to establish IOS apps. The leading company of IOS development holds the capability
                     to create business-winning apps. Our team of experts owns years of technological expertise capable to deliver
                     apps that match the business needs.
                </p>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                           <h5>Languages</h5>
                           <ul>
                               <li>Objective-C</li>
                               <li>Swift</li>
                           </ul>
                        </div>
                        <div class="col-sm">
                            <h5>Frameworks</h5>
                            <ul>
                                <li>Cocoa Touch, Cocos2D</li>
                                <li>Native SDK, Cocoa Controls</li>
                            </ul>
                        </div>
                        <div class="col-sm">
                           <h5>Development Tools</h5>
                           <li>Xcode</li>
                        </div>
                    </div>
                </div>

                               <br/>
                                <br/>
                                <br/>
                <div className="container">
                                
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/ww.jpeg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                
                            <h2>Windows App Development</h2>
                               <p>It is one of the preferred OS systems worldwide. Windows offer myriad and reliable features to the 
                                   users. The team of skilled, trained, and certified developers with great experience work on Windows
                                    App Development and offers exclusive services.  
                                </p>
                                <p>
                                Odoo-Al is devoted to offer windows phone apps to its clients with an experience on Visual 
                                Studio and Microsoft. Net. The trained teams have a reliable understanding and adequate knowledge of SDK, 
                                Visual Studio 2010, APIs, frameworks, and Windows phones to develop and design apps for Windows phones.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <h2>Why us for Mobile Development</h2>
                    <ul>
                        <li>Professional Team</li>
                        <li>Add Value</li>
                        <li>Get Results</li>
                        <li>Tailored Apps</li>
                        <li>Reliable Support</li>
                        <li>Tailored Apps</li>
                    </ul>
                </div>
                </div>
            <MakeYourBusiness />

            <Footer />
        </React.Fragment>
        );
    }
}

export default awdevelopment