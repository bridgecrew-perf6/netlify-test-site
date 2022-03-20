import React from "react";

const Affiliate = ({ image, label, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="img-affiliate">
        <img src={image} alt="img" className="img-fluid" />
        <h5 className="label">{label}</h5>
      </div>
    </a>
  );
};

const Affiliates = () => {
  const affiliates = [
    {
      image: "./assestmeta/affiliates/DexGuru.png",
      label: "dex.guru",
      link: "https://dex.guru/token/0xa5522d6137ece774e8084bbf9c34398192ccdca5-eth",
    },
    {
      image: "./assestmeta/affiliates/ShibaSwap.png",
      label: "Shiba Swap",
      link: "https://shibaswap.com/",
    },
    {
      image: "./assestmeta/affiliates/NFTEvening.png",
      label: "NFT Evening",
      link: "https://nftevening.com/cyn-c-project-this-discord-based-p2e-nft-battle-game-is-one-to-watch/",
    },
    {
      image: "./assestmeta/affiliates/DexTools.png",
      label: "Dex Tools",
      link: "https://www.dextools.io/app/ether/pair-explorer/0x3fcee77acfbb2b2a0c9ae6fdab6d0a8c3b97afc9",
    },
    {
      image: "./assestmeta/affiliates/CoinGecko.png",
      label: "CoinGecko",
      link: "https://coingecko.com/en/coins/cyn-c",
    },
    {
      image: "./assestmeta/affiliates/CoinMarketCap.png",
      label: "CoinMarketCap",
      link: "https://coinmarketcap.com/currencies/cyn-c/",
    },
    {
      image: "./assestmeta/affiliates/OpenSea.png",
      label: "OpenSea",
      link: "https://opensea.io/CYN-C",
    },
    {
      image: "./assestmeta/affiliates/CryptoDaily.png",
      label: "Crypto Daily",
      link: "https://cryptodaily.co.uk/2022/03/cyn-coin-and-its-new-comic-metaverse-hit-the-blockchain",
    },
    {
      image: "./assestmeta/affiliates/uniswap.png",
      label: "Uniswap",
      link: "https://app.uniswap.org/#/swap?outputCurrency=0xa5522d6137ece774e8084bbf9c34398192ccdca5&chain=mainnet",
    },
  ];
  return affiliates.map((affiliate) => <Affiliate {...affiliate} />);
};

export default Affiliates;
