// import logo from './logo.svg';
import { useState } from 'react';
import '../../App.scss';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Hello from './Hello';
import Banner from './main-banner/Banner';

function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    !isOpen ? <Hello open={setIsOpen}/>:<>
      <Navbar />
      <Banner />
      <Footer />
    </>
  );
}

export default Landing;