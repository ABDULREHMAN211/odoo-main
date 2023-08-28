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
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';

class Desc extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Job Description"
                    homePageUrl="/"
                />
                <div className="pb-50">
                    {/* <Partner /> */}
                </div>
                <section className="about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">

                    <div className="col-lg-6">
                            <div className="about-content">
                                <h5 className='he'>React Js Developer</h5>
                                <p>Software Engineering - Lahore</p>
                                <h6 className='he'>Responsibilities</h6>
                                <ol type="a">
                                    <li>Build new products and features through rapid build/measure/learn iterations.</li>
                                    <li>Work collaboratively with Designers, Peer Developers, Architects, and Product Managers on high impact projects.</li>
                                    <li>Understand user experience and strive to maintain a good experience when developing interfaces.</li>
                                    <li>Turn user/customer needs into elegant, user centric designs.</li>
                                    <li>Support the open source community.</li>
                                </ol>
                                <br/>
                                <h6 className='he'>Good To Have:</h6>
                                <ol type="a">
                                    <li>Experience with MV* JavaScript frameworks such as Backbone, Angular or Ember.</li>
                                    <li>Experience using mobile-first RWD techniques and patterns </li>
                                    <li>Understanding of app / browser performance and techniques</li>
                                    <li>Demonstrated ability writing semantic HTML5, CSS3 and CSS preprocessors like Sass and Less</li>
                                    <li>Track record of developing and leveraging existing reusable front-end patterns and components</li>
                                </ol>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <Link href="/form">
                                    <a className="default-btn">
                                        Apply Now
                                    </a>
                                </Link>
                                <br/>
                                <br/>
                                
                                <h5 className='he'>Share Job</h5>
                                <div>
                                <ul className="social-icon row">
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="bx bxl-pinterest-alt"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className="bx bxl-youtube"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <br/>
                                <h5 className='he'>About</h5>
                                <p>Digital Transformation with AI and Automation Services for Business Growth.Odoo-AI believes in business growth and progress-through strategic foresight, drive and determination.
                                    We own 10+ years of industry experience to deliver creative and highly effective solutions to various 
                                    businesses and innovation technological changes. Odoo AI will customize digital tech services and offer 
                                    development, QA and IT solutions to make every type of business disruption proof or competitive.
                                    <br/>
                                    <br/>
                                    Odoo Ai started its journey 2010 with a big dream and vision to assist companies. We, with limited employes, 
                                        promised to deliver high end development services and solutions. At the start, we merely focused on the development
                                        and primarily on artificial intelligence, testing, software quality processes, and automation solutions so all enterprises 
                                        will increase the demand for web based services and products. Over the years, we built our reputation
                                        with quality work into digital and technological processes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhyChooseUs/>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Desc;