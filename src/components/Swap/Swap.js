import React from "react";
import Navbar from "../landing/header/Navbar";
import Footer from "../landing/footer/Footer";
import "./swap.scss";
const SwapP = () => {
  return (
    <>
      <Navbar />
      <div className="heading">
        <h2>SWAP</h2>
      </div>
      <section className="main_Section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11 col-12 m-auto">
              <div className="row">
                <div className="col-xl-7 col-lg-12 col-md-12 col-12 m-auto pb-5">
                  <div className="main">
                    <div className="innermain">
                      <div className="img1">
                        <img
                          src="./assestmeta/Crynical/swaplogo.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="img1">
                        <img
                          src="./assestmeta/Crynical/eth.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="text">
                        <h5>CYNC/ETH</h5>
                        <span>
                          <i class="far fa-exchange"></i>
                        </span>
                      </div>
                      <button className="btn-basic">Basic</button>
                    </div>

                    <div className="main2">
                      <div className="left">
                        <h2>52.22</h2>
                        <h5>CYNC/ETH</h5>
                        <h6>+0.113(0.13)</h6>
                      </div>
                      <div className="right">
                        <div className="text">
                          <a className="ABVSAHVS" href="#">24H</a>
                        </div>
                        <div className="text">
                          <a href="#">1W</a>
                        </div>
                        <div className="text">
                          <a href="#">1M</a>
                        </div>
                        <div className="text">
                          <a href="#">1Y</a>
                        </div>
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        Feb 16, 2022, 10:05 PM
                      </p>
                    </div>
                    <div className="graph">
                      <img
                        src="./assestmeta/Crynical/graph.png"
                        alt="img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-12 col-md-12 col-12">
                  <div className="main3">
                  <div className="downarrow">
                          <img
                            src="./assestmeta/Crynical/downarraow.png"
                            alt="img"
                            className="img-fluid"
                          />
                        </div>
                    <div className="lt">
                      <div className="left">
                        <h6>Swap</h6>
                      </div>
                      <div className="right">
                        <i class="fas fa-cog"></i>
                      </div>
                    </div>

                    <div className="area">
                      <div className="dropdown">
                        {/* <div className="abs">
                          <img
                            src="./assestmeta/Crynical/eth.png"
                            alt="img"
                            className="img-fluid"
                          />
                          <span className="span1">
                          <i class="far fa-angle-down"></i>
                        </span>
                        </div> */}
                        <button
                          className="btn-drop"
                          type="button"
                          id="dropdownMenu2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                           <img
                            src="./assestmeta/Crynical/eth.png"
                            alt="img"
                            className="img-fluid shbdsh"
                          />
                          <h4>
                          ETH
                          </h4>
                          <i class="far fa-angle-down"></i>
                        </button>
                        
                      </div>

                      <div className="lt1">
                        <div className="left">
                          <h2>0.00</h2>
                          <h6>~3062.76</h6>
                        </div>
                        <div className="right">
                          <p className="p-0">Balance: 0</p>
                        </div>
                      </div>
                    </div>
                    <div className="area">
                      <div className="dropdown">
                        {/* <div className="abs">
                        
                          <span className="span2">
                         
                        </span>
                        </div> */}
                        <button
                          className="btn-drop hsdb"
                          type="button"
                          id="dropdownMenu2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                            <img
                            src="./assestmeta/Crynical/swaplogo.png"
                            alt="img"
                            className="img-fluid shbdsh"
                          />
                          <h4>
                          CYNC
                          </h4>
                          <i class="far fa-angle-down"></i>
                        </button>
                        
                      </div>

                      <div className="lt1">
                        <div className="left">
                          <h2>0.00</h2>
                          <h6> ~0.00002043</h6>
                        </div>
                        <div className="right">
                          <p className="p-0">Balance: 0</p>
                        </div>
                      </div>
                    </div>
                    <button className="btn-wallet">CONNECT WALLET</button>
                  </div>
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

export default SwapP;
