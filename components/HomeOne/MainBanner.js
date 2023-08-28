import React, { Component } from "react";
import Link from "next/link";
import ReactWOW from "react-wow";
import FloatingWhatsApp from 'react-floating-whatsapp'

class MainBanner extends Component {
  render() {
    return (
      <section className="main-banner-area main-banner-area-one">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1>
                  Build, Test and Implement World Class QA and Automation
                  Solutions
                </h1>
                <p>
                  Establish intelligent frameworks and workflows utilizing
                  Artificial Intelligence and adapt QA and solutions with
                  aspiring development services into yielding business results.
                </p>

                <div className="banner-btn">
                  <Link href="/contact">
                    <a className="default-btn">Subscribe Us</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img">
                <img src="/images/home-one/main-img1.png" alt="Image" />
              </div>

              {/* Banner Shape Images */}
              <div className="banner-img">
                <ReactWOW delay=".1s" animation="fadeInUp">
                  <img src="/images/home-one/shape1.png" alt="Image" />
                </ReactWOW>

                <ReactWOW delay=".1s" animation="fadeInUp">
                  <img src="/images/home-one/shape2.png" alt="Image" />
                </ReactWOW>

                <ReactWOW delay=".1s" animation="fadeInRight">
                  <img src="/images/home-one/shape3.png" alt="Image" />
                </ReactWOW>

                <ReactWOW delay=".1s" animation="fadeInRight">
                  <img src="/images/home-one/shape4.png" alt="Image" />
                </ReactWOW>
              </div>
            </div>
            {/* <FloatingWhatsApp
              phoneNumber="+923224006223"
              accountName="Odoo-Ai"
            /> */}
            <div style={{position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 3px #999',
          zIndex: 100
          }}>
          <a href="https://wa.me/923224006223"  style={{cursor:'pointer'}}>  <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/></a> 
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate3.png" alt="Image" />
        </div>

        <div className="white-shape">
          <img src="/images/home-one/bottom-shape.png" alt="Image" />
        </div>
      </section>
    );
  }
}

export default MainBanner;
