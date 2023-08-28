import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="choose-title">
                                <h2>Latest From Our Projects</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>
                                            01 <i className="flaticon-technical-support"></i>
                                        </span>
                                        <h3>Helix House</h3>
                                        <p>Our Projects.</p>
                                    </li>

                                    <li className="ml">
                                        <span>
                                            02 <i className="flaticon-shield"></i>
                                        </span>
                                        <h3>Trilogy</h3>
                                        <p>Our Projects.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span>
                                            03 <i className="flaticon-support"></i>
                                        </span>
                                        <h3>Deak Towk</h3>
                                        <p>Our Projects.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-img">
                                <img src="/images/chooseus.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;