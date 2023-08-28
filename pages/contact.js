import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Odoo Contact Us" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact" 
                /> 
                <ContactInfo />
                {/* <ContactForm /> */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;