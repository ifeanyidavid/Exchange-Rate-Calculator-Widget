import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CurrencyEntry from "../CurrencyEntry";
import { currencies } from "../../constants/currencies";

function ExchangeCurrencyCarousel(props) {
  const {
    currency,
    pockets,
    name,
    value,
    onChange,
    onSlide,
    showExchangeRate,
    destinationRate,
    recalculateOnSlide,
    ratesFetched
  } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currencies[currency].id,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleSlide = index => {
    recalculateOnSlide();
    onSlide(index);
  };

  return (
    <Slider
      afterChange={handleSlide}
      {...settings}
      style={{ marginBottom: "30px" }}
    >
      {pockets.map(pocket => (
        <CurrencyEntry
          key={pocket.id}
          id={pocket.id}
          currency={pocket.currency}
          balance={pocket.balance}
          symbol={pocket.symbol}
          name={name}
          value={value}
          onChange={onChange}
          showExchangeRate={showExchangeRate}
          destinationRate={destinationRate}
          ratesFetched={ratesFetched}
        />
      ))}
    </Slider>
  );
}

export default ExchangeCurrencyCarousel;

ExchangeCurrencyCarousel.propTypes = {
  currency: PropTypes.string.isRequired,
  pockets: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSlide: PropTypes.func.isRequired,
  showExchangeRate: PropTypes.bool.isRequired,
  destinationRate: PropTypes.string,
  recalculateOnSlide: PropTypes.func.isRequired,
  ratesFetched: PropTypes.func,
};
