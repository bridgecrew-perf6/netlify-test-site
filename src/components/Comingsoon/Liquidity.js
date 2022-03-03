import React from "react";
import Navbar from "../landing/header/Navbar";
import Footer from "../landing/footer/Footer";
import "./coming.scss";
const LiquidityC = () => {
  return (
    <>
      <Navbar />
      <section className="coming_soon">
          <div className="container_fluid text-center">
          <h1 className="display-1">Liquidity</h1>
              <h1 className="">Coming Soon</h1>
          </div>
      </section>
      <Footer />
    </>
  );
};

export default LiquidityC;
