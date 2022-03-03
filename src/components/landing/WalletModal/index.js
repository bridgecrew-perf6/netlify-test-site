import React from "react";
import "./index.scss";

const index = ({closeModal}) => {
  return <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <span className="close" onClick={() => closeModal()}>&times;</span>
        <h5>Wallets</h5>
      </div>
      <div className="modal-body">
        <ul>
          <li>
            <div className="wallet-item">
              <div className="wallet-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" alt="metamask"/>
              </div>
              <div className="wallet-name">
                <h3>MetaMask</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="wallet-item">
              <div className="wallet-icon">
                <img src="https://example.walletconnect.org/favicon.ico" alt="wallet-connect"/>
              </div>
              <div className="wallet-name">
                <h3>Wallet Connect</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>;
};

export default index;
