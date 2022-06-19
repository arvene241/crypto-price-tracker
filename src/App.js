import React, { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle, { Table } from "./GlobalStyle";
import { Container, Heading, Search, Select, Inputs } from "./GlobalStyle";
import Coins from "./components/Coins";
import { CoinsCol, CoinsContainer } from "./components/CoinsStyle";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("PHP");
  const [symbol, setSymbol] = useState("₱");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    if (currency === "PHP") setSymbol("₱");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading>search a currency</Heading>
        <Inputs>
          <Search
            placeholder="Search"
            type="text"
            onChange={handleChange}
          ></Search>
          <Select name="currency" id="currency" onChange={handleCurrency}>
            <option value="PHP">PHP</option>
            <option value="USD">USD</option>
          </Select>
        </Inputs>
      </Container>
      <CoinsContainer>
        <Table>
          <colgroup>
            <CoinsCol style={{ width: "56px" }} />
            <CoinsCol style={{ width: "250px" }} />
            <CoinsCol style={{ width: "180px" }} />
            <CoinsCol style={{ width: "70px" }} />
            <CoinsCol style={{ width: "70px" }} />
            <CoinsCol style={{ width: "70px" }} />
            <CoinsCol style={{ width: "200px" }} />
            <CoinsCol style={{ width: "200px" }} />
          </colgroup>
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>1hr</th>
              <th>24hr</th>
              <th>7d</th>
              <th>24hr Vol</th>
              <th>Mkt Cap</th>
            </tr>
          </thead>
          {filteredCoins.map((coin) => {
            return (
              <Coins
                rank={coin.market_cap_rank}
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                currencySymbol={symbol}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange1hr={coin.price_change_percentage_1h_in_currency}
                priceChange24hr={coin.price_change_percentage_24h_in_currency}
                priceChange7d={coin.price_change_percentage_7d_in_currency}
              />
            );
          })}
        </Table>
      </CoinsContainer>
      <footer>
        <a href="https://www.flaticon.com/free-icons/crypto" title="crypto icons">Web icons created by YI-PIN - Flaticon</a>
      </footer>
    </>
  );
}

export default App;
