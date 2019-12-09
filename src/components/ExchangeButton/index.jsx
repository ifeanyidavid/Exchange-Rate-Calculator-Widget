import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as RepeatIcon } from "../../assets/rep.svg";

const Footer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 0.5rem !important;
  height: 100%;
`;

const FooterLabel = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterLabelButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .exchange-icon {
    display: block;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    appearance: none;
    box-shadow: none;
    outline: none !important;
  }

  .exchange-icon svg {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
  .exchange-icon-white {
    background: transparent;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
  }
  .text {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

function ExchangeButton({ setExchangeOpenState }) {
  return (
    <Footer>
      <FooterLabel>
        <FooterLabelButtonWrapper>
          <button
            className="exchange-icon exchange-icon-white"
            onClick={() => setExchangeOpenState(true)}
          >
            <RepeatIcon />
          </button>
          <span className="text">Exchange</span>
        </FooterLabelButtonWrapper>
      </FooterLabel>
    </Footer>
  );
}

export default ExchangeButton;

ExchangeButton.propTypes = {
  setExchangeOpenState: PropTypes.func.isRequired
};
