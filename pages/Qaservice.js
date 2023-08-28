import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/HomeOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';

import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Servicestylenew from '../components/Services/Servicestylenew';
import Stylecomplete from '../components/Services/Stylecomplete';

export default function Qaservice() {
  return (
    <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Quality Assurance Services" 
                    homePageUrl="/"
                />

                <Stylecomplete/>
                <Servicestylenew />
                <MakeYourBusiness />

                <Footer />
            </React.Fragment>
  )
}
