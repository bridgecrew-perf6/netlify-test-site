import React from "react";
import "./index.scss";

const index = ({ closeModal, connect }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <div className={"title"}>
            <h5>Wallets</h5>
          </div>
          <div className="close" onClick={() => closeModal()}>
            &times;
          </div>
        </div>
        <div className="modal-body">
          <ul>
            <li>
              <div
                className="wallet-item"
                onClick={() => connect()}
              >
                <div className="wallet-icon">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
                    alt="metamask"
                  />
                </div>
                <div className="wallet-name">
                  <h3>MetaMask</h3>
                </div>
              </div>
            </li>
            <li>
              <div
                className="wallet-item"
                onClick={() => connect(false)}
              >
                <div className="wallet-icon">
                  <img
                    src="https://example.walletconnect.org/favicon.ico"
                    alt="wallet-connect"
                  />
                </div>
                <div className="wallet-name">
                  <h3>Wallet Connect</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
