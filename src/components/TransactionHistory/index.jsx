import React from "react";
import PropTypes from "prop-types";
import DateComponent from "../DateComponent";
import TransactionHistoryItem from "../TransactionHistoryItem";

function TransactionHistory({ transactionHistory }) {
  const hasMarginBottom = transactionHistory.length > 1 ? "mb-2" : "mb-0";
  return (
    <>
      <DateComponent />
      {transactionHistory.map(history => (
        <TransactionHistoryItem
          key={history.id}
          history={history}
          hasMarginBottom={hasMarginBottom}
        />
      ))}
    </>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactionHistory: PropTypes.array
};
