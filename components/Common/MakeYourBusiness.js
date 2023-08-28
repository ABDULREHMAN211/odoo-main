import React, { Component } from 'react';
import Link from 'next/link';

class MakeYourBusiness extends Component {
    render() {
        return (
            <section className="business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="business-content">
                                <h2>Reason For People Choose Us</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Why Us?</h3>
                                <p>Odoo-AI owns years of experience to assist clients from diverse industries to empower them with AI, Automated 
                                    Services, Technological and Digital development Transformation. We are a leading provider of digital and 
                                    technological transformation services.
                                </p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Make the Right Choice</h3>
                                <p>The next revolutionary tech development, QA services and solutions are offered by us. So, talk to us and pursue the
                                    revolution of business by using Odoo-AI services because we got solid expertise in Automation Testing.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">95%</span></h2>
                                        <p>Project Completed</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">90%</span></h2>
                                        <p>Design</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">85%</span></h2>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">80</span></h2>
                                        <p>Award Win</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MakeYourBusiness;