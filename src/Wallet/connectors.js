import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
});

export const walletconnect = new WalletConnectConnector({
  // infuraId: "https://ropsten.infura.io/v3/4d5df80b65224b15b594077646f032ac",
  rpc: {
    1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    3: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    4: "https://rinkey.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    5: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    42: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    56: "https://bsc-dataseed.binance.org/",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
});
