import React from "react";
import "./liquidty.scss";
import Navbar from "../landing/header/Navbar";
import Footer from "../landing/footer/Footer";
const LiquidtyP = () => {
  return (
    <>
      <Navbar />
      <div className="heading">
        <h2>LIQUIDITY</h2>
      </div>
      <section className="main_Section">
        <div className="container-fluid">
          <div className="col-xl-5 col-lg-7 col-md-12 col-12 m-auto">
            <div className="main">
            <div className="plus">
                          <img
                            src="./assestmeta/Crynical/plus.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
              <div className="lt">
                <div className="left">
                  <button>ADD LIQUIDITY</button>
                </div>
                <div className="right">
                  <img
                    src="./assestmeta/Crynical/liquidityicon.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <i class="fas fa-cog"></i>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="eth">
                    <img
                      src="./assestmeta/Crynical/eth.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <p>Input</p>
                    <div className="innertext">
                      <h3>ETH</h3>
                      <i class="far fa-angle-down"></i>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="lt1">
                    <div className="left">
                    <input type="number" placeholder="0.00" />
                    </div>
                    <div className="right">
                      <p className="p-0">Balance: 0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="eth">
                    <img
                      src="./assestmeta/Crynical/swaplogo.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="text">
                    <p>Output</p>
                    <div className="innertext">
                      <h3>ETH</h3>
                      <i class="far fa-angle-down"></i>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="lt1">
                    <div className="left">
                    <input type="number" placeholder="0.00" />
                    </div>
                    <div className="right">
                      <p className="p-0">Balance: 0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                 <div className="left">
                  <p>212.12 CYNC per ETH</p>
                  <p>0%</p>
                 </div>
                 <div className="right">
                  <p>0.0002134 ETH per CYNC</p>
                  <p>Share Of Pool</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow1">
        <img
                      src="./assestmeta/Crynical/liquidshadow1.svg"
                      alt="img"
                      className="img-fluid"
                    />
        </div>
        <div className="shadow2">
        <img
                      src="./assestmeta/Crynical/liquidshadow2.svg"
                      alt="img"
                      className="img-fluid"
                    />
        </div>
        <div className="shadow3">
        <img
                      src="./assestmeta/Crynical/liquidshadow3.png"
                      alt="img"
                      className="img-fluid"
                    />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LiquidtyP;
