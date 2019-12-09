import React from "react";
import PropTypes from "prop-types";
import ExchangeTopBar from "../../components/ExchangeTopBar";
import ExchangeCurrencyCarousel from "../../components/ExchangeCurrencyCarousel";
import { fieldNames } from "../../constants/fields";
import { getInputValue, validateInput, calculateRate } from "../../helpers";

class CurrencyExchange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      [fieldNames.sourceAmount]: "",
      [fieldNames.destinationAmount]: ""
    };
  }

  calculateLiveRates = (conversionDirection, value) => {
    const { rates, sourceCurrency, destinationCurrency } = this.props;

    if (value === "") {
      this.setState({
        [fieldNames.sourceAmount]: "",
        [fieldNames.destinationAmount]: ""
      });
    } else {
      if (conversionDirection === fieldNames.sourceAmount) {
        if (sourceCurrency === destinationCurrency) {
          this.setState({
            [fieldNames.destinationAmount]: value
          });
        } else {
          // Multiply by target rate
          rates.forEach(rate => {
            if (rate.base === sourceCurrency) {
              const derivedDestinationCurrency = Object.keys(rate.rates).find(
                el => el === destinationCurrency
              );

              const destinationResult = calculateRate(
                rate.rates[derivedDestinationCurrency],
                derivedDestinationCurrency,
                sourceCurrency,
                value
              );

              this.setState({
                [fieldNames.destinationAmount]: destinationResult
                  .toFixed(2)
                  .toString()
              });
            }
          });
        }
      }

      if (conversionDirection === fieldNames.destinationAmount) {
        if (sourceCurrency === destinationCurrency) {
          this.setState({
            [fieldNames.destinationAmount]: value
          });
        } else {
          rates.forEach(rate => {
            if (rate.base === destinationCurrency) {
              const derivedSourceCurrency = Object.keys(rate.rates).find(
                el => el === sourceCurrency
              );

              const sourceResult = calculateRate(
                rate.rates[derivedSourceCurrency],
                destinationCurrency,
                derivedSourceCurrency,
                value
              );

              this.setState({
                [fieldNames.sourceAmount]: sourceResult.toFixed(2).toString()
              });
            }
          });
        }
      }
    }
  };

  firstCharZero = value => {
    return this.state.sourceAmount.length === 0 && value === "0";
  };

  handleChange = event => {
    const name = event.target.name;
    const value = getInputValue(event.target.value);

    if (this.firstCharZero(value)) {
      return;
    }

    if (validateInput(value)) {
      this.setState({ [name]: value !== "" ? value.toFixed(2) : "" });
      this.calculateLiveRates(name, value);
    }
  };

  recalculateOnSlide = conversionDirection => {
    const value =
      conversionDirection === fieldNames.sourceAmount
        ? this.state[fieldNames.sourceAmount]
        : this.state[fieldNames.destinationAmount];

    this.calculateLiveRates(conversionDirection, value);
  };

  recalculateOnSourceSlide = () =>
    this.recalculateOnSlide(fieldNames.sourceAmount);

  recalculateOnTargetSlide = () =>
    this.recalculateOnSlide(fieldNames.destinationAmount);

  hasMoneyInWallet = () => {
    const { sourceAmount } = this.state;
    const { mainPockets, sourceCurrency } = this.props;

    return (
      parseFloat(mainPockets[sourceCurrency].balance.toFixed(2)) >= sourceAmount
    );
  };

  isInputEmpty = () => {
    const { sourceAmount } = this.state;
    return (
      sourceAmount !== "" &&
      sourceAmount !== "0" &&
      sourceAmount !== "0.00" &&
      sourceAmount !== "0.01"
    );
  };

  notSameCurrency = () => {
    const { sourceCurrency, destinationCurrency } = this.props;
    return sourceCurrency !== destinationCurrency;
  };

  disableExchangeButton = () => {
    return !(
      this.isInputEmpty() &&
      this.hasMoneyInWallet() &&
      this.notSameCurrency()
    );
  };

  handleExchangeCurrency = () => {
    const {
      doExchangeCurrency,
      sourceCurrency,
      destinationCurrency,
      setExchangeOpenState
    } = this.props;
    const { sourceAmount, destinationAmount } = this.state;
    doExchangeCurrency(
      sourceAmount,
      destinationAmount,
      sourceCurrency,
      destinationCurrency
    );

    this.setState({
      [fieldNames.sourceAmount]: "",
      [fieldNames.destinationAmount]: ""
    });

    setExchangeOpenState(false);
  };

  ratesFetched = () => {
    const { rates } = this.props;
    return !(rates.length > 0);
  };

  render() {
    const {
      setExchangeOpenState,
      sourceCurrency,
      destinationCurrency,
      pockets,
      updateSourceCurrencySlide,
      updateDestinationCurrencySlide,
      sourceConversionRates,
      destinationConversionRates
    } = this.props;
    const { sourceAmount, destinationAmount } = this.state;

    let sourceRate = "";
    let destinationRate = "";

    if (sourceConversionRates) {
      sourceRate = `1 ${sourceCurrency} = ${parseFloat(sourceConversionRates)
        .toFixed(2)
        .toString()} ${destinationCurrency}`;
    }

    if (destinationConversionRates) {
      destinationRate = `1 ${destinationCurrency} = ${parseFloat(
        destinationConversionRates
      )
        .toFixed(2)
        .toString()} ${sourceCurrency}`;
    }

    if (sourceCurrency === destinationCurrency) {
      sourceRate = `1 ${sourceCurrency} = 1 ${destinationCurrency}`;
      destinationRate = `1 ${sourceCurrency} = 1 ${destinationCurrency}`;
    }

    return (
      <>
        <ExchangeTopBar
          setExchangeOpenState={setExchangeOpenState}
          sourceRate={sourceRate}
          disableExchangeButton={this.disableExchangeButton}
          exhchangeCurrency={this.handleExchangeCurrency}
        />
        <ExchangeCurrencyCarousel
          name={fieldNames.sourceAmount}
          value={sourceAmount}
          onChange={this.handleChange}
          currency={sourceCurrency}
          pockets={pockets}
          onSlide={updateSourceCurrencySlide}
          recalculateOnSlide={this.recalculateOnSourceSlide}
          showExchangeRate={false}
          ratesFetched={this.ratesFetched}
        />
        <hr />
        <ExchangeCurrencyCarousel
          name={fieldNames.destinationAmount}
          value={destinationAmount}
          onChange={this.handleChange}
          currency={destinationCurrency}
          pockets={pockets}
          onSlide={updateDestinationCurrencySlide}
          showExchangeRate={true}
          destinationRate={destinationRate}
          recalculateOnSlide={this.recalculateOnTargetSlide}
          ratesFetched={this.ratesFetched}
        />
      </>
    );
  }
}

export default CurrencyExchange;

CurrencyExchange.propTypes = {
  setExchangeOpenState: PropTypes.func.isRequired,
  sourceCurrency: PropTypes.string.isRequired,
  destinationCurrency: PropTypes.string.isRequired,
  pockets: PropTypes.array.isRequired,
  rates: PropTypes.array.isRequired,
  updateSourceCurrencySlide: PropTypes.func.isRequired,
  updateDestinationCurrencySlide: PropTypes.func.isRequired,
  sourceConversionRates: PropTypes.number,
  destinationConversionRates: PropTypes.number,
  doExchangeCurrency: PropTypes.func.isRequired,
  mainPockets: PropTypes.object.isRequired
};
