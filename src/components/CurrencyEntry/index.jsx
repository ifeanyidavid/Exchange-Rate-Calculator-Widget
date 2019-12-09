import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fieldNames } from "../../constants/fields";

const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 200px;
  max-height: 100%;
  padding: 16px;
  cursor: move;

  .balance {
    min-width: 100px;
    max-width: 100%;
  }

  .currency {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .currency-input {
    text-align: right;
    box-shadow: none;
    font-size: 18px;
    padding: 20px;
    width: 230px;
    outline: none !important;
    border: none;
  }

  .currency-input:focus {
    box-shadow: none;
  }
`;

function CurrencyEntry({
  name,
  onChange,
  value,
  balance,
  currency,
  symbol,
  showExchangeRate,
  destinationRate,
  ratesFetched
}) {
  const prefix = name === fieldNames.sourceAmount ? "-" : "+";

  const disabled = ratesFetched();
  return (
    <SliderWrapper>
      <div className="d-flex flex-column balance">
        <h2 className="currency">{currency}</h2>
        <small className="text-muted">
          You have {symbol} {parseInt(balance).toString()}
        </small>
      </div>
      <div className="d-flex flex-column justify-content-end">
        <input
          type="text"
          pattern="[0-9]*"
          placeholder="0"
          autoComplete="off"
          className="currency-input"
          name={name}
          value={value ? prefix + value : value}
          onChange={e => onChange(e)}
          disabled={disabled}
        />
        {showExchangeRate && (
          <small className="font-weight-bold text-right">
            {destinationRate}
          </small>
        )}
      </div>
    </SliderWrapper>
  );
}

export default CurrencyEntry;

CurrencyEntry.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  balance: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  showExchangeRate: PropTypes.bool.isRequired,
  destinationRate: PropTypes.string,
  ratesFetched: PropTypes.func
};
