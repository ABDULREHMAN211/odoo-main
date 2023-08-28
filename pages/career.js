import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../components/Layouts/Footer";
import Cardd from "./cardd";

class Career extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="Odoo Careers"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Careers"
        />
        <br />
        <br />
        <Cardd />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Career;
