import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area features-area-inner-style ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>Quality Assurance And Automation</h3>
                                <p>Quality assurance is a way of preventing mistakes and defects in manufactured products 
                                    and avoiding problems when delivering products. </p>
                                    <br/>
                                {/* <Link href="#">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link> */}

                                <ul class="justify-content-center">
                                <Link href="/usabilitytesting">
                                    <a>
                                        <span>Usability Testing</span>
                                    </a>
                                </Link>
                                <br/>
                                <Link href="/mobiletesting">
                                    <a>
                                        <span>Mobile Testing</span>
                                    </a>
                                </Link>
                                <br/>
                                <Link href="/performancetesting">
                                    <a>
                                        <span>Performance Testing</span>
                                    </a>
                                </Link>
                                <br/>
                                <Link href="/apitesting">
                                    <a>
                                        <span>API Testing</span>
                                    </a>
                                </Link>
                                <br/>
                                <Link href="/manualtesting">
                                    <a>
                                        <span>Manual Testing</span>
                                    </a>
                                </Link>
                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-engineer"></i>
                                <h3>Web And Mobile App Development</h3>
                                <p>Software development is the process of conceiving, specifying, designing, programming, 
                                    documenting, testing, and bug fixing. Technology is the continually developing result of accumulated 
                                    knowledge and application in all techniques and processes.</p>
                                <br/>
                            <ul class="justify-content-center">
                                    <Link href="/appdevelopment">
                                        <a>
                                            <span>Mobile App Development</span>
                                        </a>
                                    </Link>
                                    <br/>
                                    <Link href="/webdevelopment">
                                        <a>
                                            <span>Web Development</span>
                                        </a>
                                    </Link>
                            </ul>
                            </div>
                                
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Custom Software Development</h3>
                                <p>Custom software development is the process of designing, creating, deploying 
                                    and maintaining software for a specific set of users, functions or organizations. 
                                    In contrast to commercial off-the-shelf software (COTS). technology is science or knowledge 
                                    put into practical use to solve problems or invent useful tools. Technology is best.</p>
                                    <br/>
                                    <ul>
                                        <Link href="/development">
                                        <a>
                                            <span>Development</span>
                                        </a>
                                        </Link>
                                    </ul>
                            </div>
                                
                        </div>

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-technical-support"></i>
                                <h3>Safe Security</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-shield"></i>
                                <h3>Technical Support</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-success"></i>
                                <h3>Live Support</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-machine-learning"></i>
                                <h3>Heavy Industry</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="single-features">
                                <i className="flaticon-artificial-intelligence"></i>
                                <h3>Transportation</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-features">
                                <i className="flaticon-health"></i>
                                <h3>Health Care</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, maxime ipsum praesentium culpa expedita.</p>

                                <Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>
                            </div>
                        </div> */}

                        {/* Pagination */}
                        {/* <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link page-links">
                                                    <i className='bx bx-chevrons-left'></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li className="page-item active">
                                            <Link href="#">
                                                <a className="page-link">1</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">2</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">3</a>
                                            </Link>
                                        </li>

                                        <li className="page-item">
                                            <Link href="#">
                                                <a className="page-link">
                                                    <i className='bx bx-chevrons-right'></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesStyleOne;