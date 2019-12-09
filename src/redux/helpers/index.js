import { currencies } from "../../constants/currencies";

export const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues);
};

export const getCurrencyById = id => {
  return Object.values(currencies).find(currency => currency.id === id);
};
