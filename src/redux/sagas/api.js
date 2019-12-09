export const getEURRates = async () => {
  const data = await fetch(
    "https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD,GBP"
  );
  const response = await data.json();
  return response;
};

export const getGBPRates = async () => {
  const data = await fetch(
    "https://api.exchangeratesapi.io/latest?base=GBP&symbols=EUR,USD"
  );
  const response = await data.json();
  return response;
};

export const getUSDRates = async () => {
  const data = await fetch(
    "https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP"
  );

  const response = await data.json();
  return response;
};
