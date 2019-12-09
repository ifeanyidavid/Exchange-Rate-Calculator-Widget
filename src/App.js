import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./App.css";
import Pocket from "./views/Pocket";
import CurrencyExchange from "./views/CurrencyExchange";
import {
  updateSourceCurrency,
  updateDestinationCurrency,
  exchangeCurrency
} from "./redux/actionCreators";
import {
  pocketValues,
  getSourceCurrency,
  getDestinationCurrency,
  getRates,
  getSourceConversionRates,
  getDestinationConversionRates,
  getTransactionHistory
} from "./redux/selectors";
import ErrorBoundary from "./components/ErrorBoundary";

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.direction === "column" ? "column" : "row")}
  margin-right: -15px;
  margin-left: -15px;
  justify-content: ${props => props.justifyContent};
`;

function App({
  updateSourceCurrencySlide,
  updateDestinationCurrencySlide,
  pocketValues,
  sourceCurrency,
  destinationCurrency,
  rates,
  sourceConversionRates,
  destinationConversionRates,
  doExchangeCurrency,
  pockets,
  transactionHistory
}) {
  const [exchangeViewOpen, setExchangeOpenState] = useState(false);

  return (
    <ErrorBoundary>
      <Container>
        <Row justifyContent="center">
          <div className="col-12 col-md-5">
            <div className="w-100 border rounded">
              {exchangeViewOpen ? (
                <CurrencyExchange
                  setExchangeOpenState={setExchangeOpenState}
                  sourceCurrency={sourceCurrency}
                  destinationCurrency={destinationCurrency}
                  pockets={pocketValues}
                  mainPockets={pockets}
                  rates={rates}
                  updateSourceCurrencySlide={updateSourceCurrencySlide}
                  updateDestinationCurrencySlide={
                    updateDestinationCurrencySlide
                  }
                  sourceConversionRates={sourceConversionRates}
                  destinationConversionRates={destinationConversionRates}
                  doExchangeCurrency={doExchangeCurrency}
                />
              ) : (
                <Pocket
                  setExchangeOpenState={setExchangeOpenState}
                  updateSourceCurrency={updateSourceCurrencySlide}
                  pockets={pocketValues}
                  sourceCurrency={sourceCurrency}
                  transactionHistory={transactionHistory}
                />
              )}
            </div>
          </div>
        </Row>
      </Container>
    </ErrorBoundary>
  );
}

const mapStateToProps = state => {
  return {
    sourceCurrency: getSourceCurrency(state),
    destinationCurrency: getDestinationCurrency(state),
    rates: getRates(state),
    pocketValues: pocketValues(state),
    pockets: state.pocketsReducer.pockets,
    sourceConversionRates: getSourceConversionRates(state),
    destinationConversionRates: getDestinationConversionRates(state),
    transactionHistory: getTransactionHistory(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSourceCurrencySlide: slideIndex =>
      dispatch(updateSourceCurrency(slideIndex)),
    updateDestinationCurrencySlide: slideIndex =>
      dispatch(updateDestinationCurrency(slideIndex)),
    doExchangeCurrency: (
      source,
      destination,
      sourceCurrency,
      destinationCurrency
    ) =>
      dispatch(
        exchangeCurrency(
          source,
          destination,
          sourceCurrency,
          destinationCurrency
        )
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  updateSourceCurrencySlide: PropTypes.func.isRequired,
  updateDestinationCurrencySlide: PropTypes.func.isRequired,
  pocketValues: PropTypes.array.isRequired,
  sourceCurrency: PropTypes.string.isRequired,
  destinationCurrency: PropTypes.string.isRequired,
  rates: PropTypes.array.isRequired,
  sourceConversionRates: PropTypes.number,
  destinationConversionRates: PropTypes.number,
  doExchangeCurrency: PropTypes.func.isRequired,
  pockets: PropTypes.object.isRequired,
  transactionHistory: PropTypes.array
};
