import React, { useCallback, useEffect, useState } from 'react';
import banner1 from '../../assets/restaurant.jpeg';
import banner2 from '../../assets/res2.jpeg';
import banner3 from '../../assets/drink.jpeg';
import banner4 from '../../assets/food.jpeg';
import PropTypes from 'prop-types';

const Slide = ({ image, currentSlideIndex, myIndex }) => {
  return (
    <div
      className={`slider__slide fade ${
        currentSlideIndex === myIndex ? 'display-unset' : ''
      }`}
    >
      <img src={image} alt='banner' />
    </div>
  );
};

export const Slider = ({
  slides = [banner1, banner2, banner3, banner4],
  autoSlide = true,
  slideIntervale = 5000,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const forwardSlide = useCallback(() => {
    if (currentSlideIndex === slides.length - 1) return setCurrentSlideIndex(0);
    setCurrentSlideIndex(currentSlideIndex + 1);
  }, [currentSlideIndex ,slides]);

  const backwardSlide = () => {
    if (!currentSlideIndex) return setCurrentSlideIndex(slides.length - 1);
    setCurrentSlideIndex(currentSlideIndex - 1);
  };

  useEffect(() => {
    if (autoSlide) {
      let timer = setTimeout(() => forwardSlide(), slideIntervale);
      return () => clearTimeout(timer);
    }
  }, [autoSlide, forwardSlide, slideIntervale]);

  return (
    <div className='slider__container'>
      {slides.map((slide, i) => (
        <Slide
          image={slide}
          key={i}
          myIndex={i}
          currentSlideIndex={currentSlideIndex}
        />
      ))}
      {!autoSlide && (
        <>
          <div className='prev' tabIndex={0} onClick={backwardSlide}>
            &#10094;
          </div>
          <div className='next' tabIndex={0} onClick={forwardSlide}>
            &#10095;
          </div>
        </>
      )}
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.node,
  currentSlideIndex: PropTypes.number,
  myIndex: PropTypes.number,
};

Slider.propTypes = {
  slides: PropTypes.array,
  autoSlide: PropTypes.bool,
  slideIntervale: PropTypes.number,
};
