import { currencies } from "../constants/currencies";

export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
};

export const getCurrencyById = id => {
  return Object.values(currencies).find(currency => currency.id === id);
};

export const checkValueContainsPlusorMinus = value => {
  const stringifiedInputValue = value.toString();
  return (
    stringifiedInputValue.indexOf("+") !== -1 ||
    stringifiedInputValue.indexOf("-") !== -1
  );
};

export const validateInput = value => {
  const stringifiedInputValue = value.toString();
  return (
    stringifiedInputValue === "" ||
    /^[0-9]+$/.test(stringifiedInputValue) ||
    /^[0-9]*[.]$/.test(stringifiedInputValue) ||
    /^[0-9]*[.][0-9]{1,2}$/.test(stringifiedInputValue)
  );
};

export const validateNumber = value => {
  return /^[0-9]+$/.test(value);
};

export const getInputValue = value => {
  const stringifiedInputValue = value.toString();
  if (checkValueContainsPlusorMinus(value)) {
    if (stringifiedInputValue.length > 1) {
      return stringifiedInputValue.substring(1);
    }
    return "";
  } else {
    return stringifiedInputValue;
  }
};

export const calculateRate = (
  rate,
  destinationCurrency,
  sourceCurrency,
  value
) => {
  if (sourceCurrency !== destinationCurrency) {
    return rate * value;
  } else {
    return value;
  }
};
