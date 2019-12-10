import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CurrencyPocketsCarousel from "../../components/CurrencyPocketsCarousel";
import ExchangeButton from "../../components/ExchangeButton";
import TransactionHistory from "../../components/TransactionHistory";

export const Wrapper = styled.div`
  background: rgb(48, 116, 234);
  background: -moz-linear-gradient(
    32deg,
    rgba(48, 116, 234, 1) 0%,
    rgba(48, 116, 234, 1) 70%,
    rgba(204, 0, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    32deg,
    rgba(48, 116, 234, 1) 0%,
    rgba(48, 116, 234, 1) 70%,
    rgba(204, 0, 255, 1) 100%
  );
  background: linear-gradient(
    32deg,
    rgba(48, 116, 234, 1) 0%,
    rgba(48, 116, 234, 1) 70%,
    rgba(204, 0, 255, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3074ea",endColorstr="#cc00ff",GradientType=1);
  height: 450px;
  display: flex;
  flex-direction: column;
`;

function Pocket({
  setExchangeOpenState,
  updateSourceCurrency,
  pockets,
  sourceCurrency,
  transactionHistory
}) {
  return (
    <>
      <Wrapper>
        <CurrencyPocketsCarousel
          updateSourceCurrency={updateSourceCurrency}
          pockets={pockets}
          currency={sourceCurrency}
        />
        <ExchangeButton setExchangeOpenState={setExchangeOpenState} />
      </Wrapper>
      {transactionHistory.length > 0 && (
        <div className="p-3">
          <TransactionHistory transactionHistory={transactionHistory} />
        </div>
      )}
    </>
  );
}

export default Pocket;

Pocket.propTypes = {
  setExchangeOpenState: PropTypes.func.isRequired,
  updateSourceCurrency: PropTypes.func.isRequired,
  pockets: PropTypes.array.isRequired,
  sourceCurrency: PropTypes.string.isRequired,
  transactionHistory: PropTypes.array
};
