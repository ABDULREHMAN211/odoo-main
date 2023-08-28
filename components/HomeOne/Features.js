import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
    render() {
        return (
            <div className="features-area pt-100 pb-70" style={{zIndex:'0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>Quality Assurance And Automation</h3>
                                <p>All types of businesses and enterprises demand perfection and precision in their applications.
                                </p>
                                
                                <Link href="/qa">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>Custom Software Development</h3>
                                <p>Get the best and adequate custom software development services from the leading Odoo-AI Company.</p>
                                
                                <Link href="/custsoftdevelopment">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Web And Mobile App Development</h3>
                                <p>Create high quality and feature-rich mobile apps.With the advancement of technology, mobile applications are 
                                    essential.</p>
                                
                                <Link href="/awdevelopment">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;