// import logo from './logo.svg';
import '../../App.scss';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Banner from './main-banner/Banner';

function Landing() {
  
  return (
    <>
      <Navbar />
      <Banner />
      <Footer />
    </>
  );
}

export default Landing;