import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  .text-btn {
    appearance: none;
    background: none;
    border: none;
    outline: none !important;
    font-size: 13px;
    text-transform: uppercase;
  }

  .exchange-rate {
    font-size: 11px;
  }
`;

function ExchangeTopBar({
  setExchangeOpenState,
  sourceRate,
  disableExchangeButton,
  exhchangeCurrency
}) {
  const disabled = disableExchangeButton();
  const disabledClass = disabled ? "text-muted" : "text-primary";
  return (
    <Nav>
      <button
        className="text-btn text-muted cancel"
        onClick={() => setExchangeOpenState(false)}
      >
        Cancel
      </button>
      <div className="border rounded px-1">
        <span className="font-weight-bold exchange-rate">{sourceRate}</span>
      </div>
      <button
        className={`text-btn ${disabledClass}`}
        disabled={disabled}
        onClick={exhchangeCurrency}
      >
        Exchange
      </button>
    </Nav>
  );
}

export default ExchangeTopBar;

ExchangeTopBar.propTypes = {
  setExchangeOpenState: PropTypes.func.isRequired,
  sourceRate: PropTypes.string,
  disableExchangeButton: PropTypes.func.isRequired,
  exhchangeCurrency: PropTypes.func.isRequired
};
