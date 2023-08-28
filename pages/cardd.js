import React, { Component } from "react";
import Link from "next/link";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

class Cardd extends Component {
  render() {
    const cardInfo = [
      {
        id: 1,
        Post: "React",
        Positions: "Five Positions",
        Office: "Lahore",
      },
      {
        id: 2,
        Post: "Mern",
        Positions: "Two Positions",
        Office: "Lahore",
      },
      {
        id: 3,
        Post: "Magento",
        Positions: "One Position",
        Office: "Lahore",
      },
      {
        id: 4,
        Post: "Unity",
        Positions: "Three Positions",
        Office: "Lahore",
      },
      {
        id: 5,
        Post: "Laravel",
        Positions: "One Position",
        Office: "Lahore",
      },
      {
        id: 6,
        Post: "WordPress",
        Positions: "Four Position",
        Office: "Lahore",
      },
    ];
    return (
      <div>
        <h1 className="hee he">Available Positions</h1>
        <br/>
        <div className="container">
          <div className="row">
            {cardInfo.map((Item) => {
              return (
                <div className="col-lg-4 col-sm-6">
                  <Link href="/desc">
                    <div className="single-features">
                      
                      <h2 className="h he">{Item.Post}</h2>
                      <p className="he">{Item.Positions}</p>
                      <h6 className="h he">{Item.Office}</h6>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <section className="offer-area pt-100 pb-70" style={{ zIndex: "0" }}>
          <div className="container">
            <div className="section-title">
              <span>Our Work Process</span>
              <h2>Simple & Clean Work Process</h2>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="single-offer">
                  <i className="flaticon-chip"></i>
                  <h3>
                    <Link href="#">
                      <a>Technology understanding</a>
                    </Link>
                  </h3>
                  <p>
                    It is important for the companies to understand the
                    technologies utilized for the robotic process, and identify
                    the system along with their strengths and limitations. This
                    helps to position and determines the specific needs.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="single-offer">
                  <i className="flaticon-vr"></i>
                  <h3>
                    <Link href="#">
                      <a>Project creation</a>
                    </Link>
                  </h3>
                  <p>
                    This phase systematically determines the capabilities and
                    needs to develop a project. A small consultation helps to
                    recognize the opportunities which benefits the business with
                    scalling
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="single-offer">
                  <i className="flaticon-blockchain"></i>
                  <h3>
                    <Link href="#">
                      <a>Business process design</a>
                    </Link>
                  </h3>
                  <p>
                    Technological projects along with the services and cognitive
                    ability are designed with a workflow, focusing on the
                    business process to ensure the strengths of the project. All
                    of the design enabling to understand customer needs
                    involving employees and technological capabilities in the
                    design process.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                {/* <div className="single-offer">
                      <i className="flaticon-target"></i>
                      <h3>
                          <Link href="/service-details">
                              <a>Image Processing</a>
                          </Link>
                      </h3>
                      <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                  </div> */}
              </div>

              <div className="col-lg-4 col-sm-6">
                {/* <div className="single-offer">
                      <i className="flaticon-choice"></i>
                      <h3>
                          <Link href="/service-details">
                              <a>Order Management</a>
                          </Link>
                      </h3>
                      <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                  </div> */}
              </div>

              <div className="col-lg-4 col-sm-6">
                {/* <div className="single-offer">
                      <i className="flaticon-deep-learning"></i>
                      <h3>
                          <Link href="/service-details">
                              <a>Machine Learning</a>
                          </Link>
                      </h3>
                      <p>Lorem consectetur ipsum dolor sit amet,  adipiscing elit, do eiusmod tempor incididunt sed.</p>
                  </div> */}
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="offer-shape">
            <img src="/images/shape/services-shape/1.png" alt="Image" />
            <img src="/images/shape/services-shape/2.png" alt="Image" />
            <img src="/images/shape/services-shape/3.png" alt="Image" />
            <img src="/images/shape/services-shape/4.png" alt="Image" />
            <img src="/images/shape/services-shape/5.png" alt="Image" />
            <img src="/images/shape/services-shape/6.png" alt="Image" />
          </div>
        </section>
      </div>
    );
  }
}

export default Cardd;
