import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { currencies } from "../../constants/currencies";

const SliderContainer = styled.div`
  color: #fff;
  min-height: 300px;
  max-height: 100%;
  cursor: move;
  display: flex !important;
  text-align: center !important;
  flex-direction: column !important;
  justify-content: center !important;
`;

const BlockText = styled.span`
  font-size: ${props => props.fontSize};
  display: block;
  weight: ${props => props.weight};
`;

function CurrencyPocketsCarousel({ updateSourceCurrency, pockets, currency }) {
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
    updateSourceCurrency(index);
  };

  return (
    <>
      <Slider afterChange={handleSlide} {...settings}>
        {pockets.map(pocket => (
          <SliderContainer key={pocket.id}>
            <div>
              <BlockText weight="bold" fontSize="32px">
                {`${pocket.symbol} ${parseFloat(pocket.balance).toFixed(2)}`}
              </BlockText>
              <BlockText weight="normal" fontSize="16px">
                {`${pocket.currency} - ${pocket.description}`}
              </BlockText>
            </div>
          </SliderContainer>
        ))}
      </Slider>
    </>
  );
}

export default CurrencyPocketsCarousel;

CurrencyPocketsCarousel.propTypes = {
  updateSourceCurrency: PropTypes.func.isRequired,
  pockets: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired
};
