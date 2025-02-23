import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
