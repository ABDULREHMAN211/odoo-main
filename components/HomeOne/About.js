import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <section className="about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/images/About.jpg" alt="Image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>Digital Transformation with AI and Automation Services for Business Growth</h2>
                                <p>Odoo-AI believes in business growth and progress-through strategic foresight, drive and determination.
                                    We own 10+ years of industry experience to deliver creative and highly effective solutions to various 
                                    businesses and innovation technological changes. Odoo AI will customize digital tech services and offer 
                                    development, QA and IT solutions to make every type of business disruption proof or competitive.
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
            </section>
        );
    }
}

export default About;