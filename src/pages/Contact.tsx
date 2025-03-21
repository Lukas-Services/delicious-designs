
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactComponent from '../components/Contact';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
