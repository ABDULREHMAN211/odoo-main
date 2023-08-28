import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <footer className="footer-top-area pt-100 pb-70" style={{zIndex:'0'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <br/>
                                    <p>Our goal is to help our companies to maintain and achieve best class positions in their respective
                                        industries & our team work occurs and that works have to  be repudiated.
                                    </p>

                                    <ul className="social-icon">
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
                            </div>

                            {/* <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Big Data
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    UI/UX Design
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Desktop Application
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Mobile Application
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Product Engineering
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Machine Learning
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Important Links</h3>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Home
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    About Company
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Our Services
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Portfolio
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Contact Us
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Information</h3>

                                    <ul className="information">
                                        <li className="address">
                                            <i className="flaticon-call"></i>
                                            <span>Phone</span>
                                            04232326502
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-envelope"></i>
                                            <span>Email</span>
                                            info@odoo-ai.com
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-maps-and-flags"></i>
                                            <span>Address</span>
                                            264-A main college road UET housing society, Lahore
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-shape">
                        <img src="/images/shape/footer-shape-one.png" alt="Image" />
                        <img src="/images/shape/footer-shape-two.png" alt="Image" />
                    </div>
                </footer>
    
                {/* Footer Bottom Area   */}
                <footer className="footer-bottom-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="copy-right">
                                    <p>Copyright <i className="bx bx-copyright"></i> {currentYear} Odoo-Ai. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;