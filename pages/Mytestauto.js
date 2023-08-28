import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/HomeOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Footer from '../components/Layouts/Footer';
import Servicestylenew from '../components/Services/Servicestylenew';
import Stylecomplete from '../components/Services/Stylecomplete';
import SpServices from '../components/Services/SpServices';

export default function Mytestauto() {
  return (
    <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Quality Assurance Services" 
                    homePageUrl="/"
                />

                <SpServices/>

                <Footer />
            </React.Fragment>
  )
}
