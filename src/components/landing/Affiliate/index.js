import React from "react";

const Affiliate = ({image, label}) => {
  return (
    <div className="img-affiliate">
      <img
        src={image}
        alt="img"
        className="img-fluid"
      />
      <h5 className="label">{label}</h5>
    </div>
  );
};

const Affiliates = () => {
  const affiliates = [
    {
      image: "./assestmeta/affiliates/DexGuru.jpeg",
      label: 'dex.guru'
    },
    {
      image: "./assestmeta/affiliates/ShibaSwap.jpeg",
      label: "Shiba Swap"
    },
    {
      image: "./assestmeta/affiliates/NFTEvening.jpeg",
      label: "NFT Evening"
    },
    {
      image: "./assestmeta/affiliates/DexTools.jpeg",
      label: "Dex Tools"
    },
    {
      image: "./assestmeta/affiliates/CoinGecko.jpeg",
      label: "CoinGecko"
    },
    {
      image: "./assestmeta/affiliates/CoinMarketCap.jpeg",
      label: "CoinMarketCap"
    },
    {
      image: "./assestmeta/affiliates/OpenSea.jpeg",
      label: "OpenSea"
    },
    {
      image: "./assestmeta/affiliates/CryptoDaily.jpeg",
      label: "Crypto Daily"
    },
    {
      image: "./assestmeta/affiliates/uniswap.jpg",
      label: "Uniswap"
    }
  ]
  return (
    affiliates.map(affiliate => <Affiliate {...affiliate} />)
  );
};

export default Affiliates;
