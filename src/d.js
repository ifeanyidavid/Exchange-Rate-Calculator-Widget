<ErrorBoundary>
      <div className="container-fluid d-flex flex-column justify-content-center wrapper">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <div className="w-100 border rounded">
              {exchangeViewOpen ? (
                <Exchange
                  setExchangeOpenState={setExchangeOpenState}
                  saveRates={saveRates}
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
        </div>
      </div>
    </ErrorBoundary>

<Slider afterChange={handleSlide} {...settings}>
{pockets.map(pocket => (
  <SliderContainer key={pocket.id}>
    <div>
      <BlockText weight="bold" fontSize="32px">
        {`${pocket.symbol} ${parseInt(pocket.balance)
          .toFixed(2)
          .toString()}`}
      </BlockText>
      <BlockText weight="normal" fontSize="16px">
        {`${pocket.currency} - ${pocket.description}`}
      </BlockText>
    </div>
  </SliderContainer>
))}
</Slider>