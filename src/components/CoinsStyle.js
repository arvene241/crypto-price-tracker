import styled from "styled-components";
import { flex } from "../GlobalStyle";

export const CoinsContainer = styled.div`
  display: block;
  width: 100%;
  overflow-x: auto;

  td {
    text-align: right;

    :nth-child(1) {
      text-align: center;
    }
  }

  th {
    text-align: right;

    :nth-child(1) {
      text-align: center;
    }

    :nth-child(2) {
      text-align: left;
    }
  }

  tr {
    height: 50px;
  }

  ${flex};
`;

export const CoinsCol = styled.col`

`;

export const Coin = styled.td`
  ${flex};
  justify-content: start;
  height: 50px;
`;

export const CoinIcon = styled.img`
  height: 30px;
  width: 30px;
`;

export const CoinName = styled.p`
  display: flex;
  margin-left: 10px;
  flex: 1;
  font-size: 1rem;
  text-align: left !important;
`;

export const CoinSymbol = styled.p`
  text-transform: uppercase;
  text-align: left !important;
`;

export const CoinRedPercent = styled.td`
  width: 100px;
  color: #f00606;
`;

export const CoinGreenPercent = styled.td`
  width: 100px;
  color: #11d811;
`;
