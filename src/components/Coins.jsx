import React from "react";
import {
  Coin,
  CoinName,
  CoinIcon,
  CoinRedPercent,
  CoinGreenPercent,
  CoinSymbol,
} from "./CoinsStyle";

function Coins({
  rank,
  name,
  price,
  currencySymbol,
  symbol,
  marketcap,
  volume,
  image,
  priceChange1hr,
  priceChange24hr,
  priceChange7d,
}) {
  return (
    <tbody>
      <tr>
        <td>{rank}</td>
        <Coin>
          <CoinIcon src={image} alt="coins-icon" />
          <CoinName>{name}</CoinName>
          <CoinSymbol>{symbol}</CoinSymbol>
        </Coin>
        <td>{currencySymbol}{price.toLocaleString()}</td>
        {priceChange1hr < 0 ? (
          <CoinRedPercent>{priceChange1hr.toFixed(2)}%</CoinRedPercent>
        ) : (
          <CoinGreenPercent>{priceChange1hr.toFixed(2)}%</CoinGreenPercent>
        )}
        {priceChange24hr < 0 ? (
          <CoinRedPercent>{priceChange24hr.toFixed(2)}%</CoinRedPercent>
        ) : (
          <CoinGreenPercent>{priceChange24hr.toFixed(2)}%</CoinGreenPercent>
        )}
        {priceChange7d < 0 ? (
          <CoinRedPercent>{priceChange7d.toFixed(2)}%</CoinRedPercent>
        ) : (
          <CoinGreenPercent>{priceChange7d.toFixed(2)}%</CoinGreenPercent>
        )}
        <td>{currencySymbol}{volume.toLocaleString()}</td>
        <td>{currencySymbol}{marketcap.toLocaleString()}</td>
      </tr>
    </tbody>
  );
}

export default Coins;
