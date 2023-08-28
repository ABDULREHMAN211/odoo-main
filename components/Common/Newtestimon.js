import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
}

class Newtestimon extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="client-area ptb-100 my-5">
                <div className="container">
                    <div className="section-title">
                        <span>Clients</span>
                        <h2>Latest thinking In AI & Our Clients</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="client-wrap owl-carousel owl-theme"
                        {...options}
                    >
                        <div >
                            {/* <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul> */}

                            <div className="quotes">
                                <img src="/images/clients/1.png" alt="Image" />
                            </div>
                        </div>

                        <div>
                            {/* <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul> */}

                            <div className="quotes">
                                <img src="/images/clients/2.png" alt="Image" />
                            </div>
                        </div>

                        <div>
                            {/* <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul> */}

                            <div className="quotes">
                                <img src="/images/clients/6.jpg" alt="Image" />
                                {/* <h3>John Dona</h3>
                                <span>Designer</span> */}
                            </div>
                        </div>

                        <div>
                            {/* <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul> */}

                            <div className="quotes">
                                <img src="/images/clients/3.jpg" alt="Image" />
                                {/* <h3>Jon Smith</h3>
                                <span>Developer</span> */}
                            </div>
                        </div>

                        <div>
                            {/* <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul> */}

                            <div className="quotes">
                                <img src="/images/clients/4.jpg" alt="Image" />
                                {/* <h3>Jon Smith</h3>
                                <span>Developer</span> */}
                            </div>
                        </div>

                        <div>
                            {/* <i className="quotes flaticon-left-quotes-sign"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>
                           
                            <ul>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                                <li><i className="bx bxs-star"></i></li>
                            </ul> */}

                            <div className="quotes">
                                <img src="/images/clients/5.png" alt="Image" />
                                {/* <h3>Jon Smith</h3>
                                <span>Developer</span> */}
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default Newtestimon;