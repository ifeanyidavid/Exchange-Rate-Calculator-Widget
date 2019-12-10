import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as RepeatIcon } from "../../assets/rep.svg";

const Flex = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "flex-start"};

  .exchange-icon {
    display: block;

    flex-shrink: 0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
  }

  .exchange-icon svg {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }

  .exchange-icon-dark {
    background: rgba(0, 0, 0, 0.57);
  }
`;

function TransactionHistoryItem({ history, marginBottom }) {
  return (
    <div className={`${marginBottom}`}>
      <Flex justifyContent="space-between">
        <Flex>
          <i className="exchange-icon exchange-icon-dark">
            <RepeatIcon />
          </i>
          <div className="text-left ml-3">
            <span className="d-block">{history.description}</span>
            <span className="d-block text-muted">{history.time}</span>
          </div>
        </Flex>
        <div className="text-right">
          <span className="d-block">
            -{history.sourceCurrency} {history.sourceAmount}
          </span>
          <span className="d-block text-primary">
            +{history.destinationCurrency} {history.destinationAmount}
          </span>
        </div>
      </Flex>
    </div>
  );
}

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  history: PropTypes.object,
  marginBottom: PropTypes.string
};
