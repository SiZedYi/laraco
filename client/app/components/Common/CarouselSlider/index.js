/**
 *
 * Carousel
 * https://github.com/YIZHUANG/react-multi-carousel/blob/master/stories/index.stories.js
 * https://react-multi-carousel.surge.sh
 */

import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselSlider = props => {
  const {
    swipeable,
    draggable,
    showDots,
    infinite,
    autoPlay,
    keyBoardControl,
    autoPlaySpeed,
    ssr,
    responsive,
    children
  } = props;

  return (
    <Carousel
      swipeable={swipeable}
      draggable={draggable}
      showDots={showDots}
      infinite={infinite}

      autoPlay={autoPlay}
      keyBoardControl={keyBoardControl}
      autoPlaySpeed={autoPlaySpeed}
      ssr={ssr}
      responsive={responsive}
      customTransition='all 1s'
      transitionDuration={500}
      containerClass='carousel-container'
      dotListClass='carousel-dot-list-style'
      itemClass='carousel-slider-item'
    >
      {children}
    </Carousel>
  );
};

CarouselSlider.defaultProps = {
  swipeable: false,
  draggable: false,
  showDots: false,
  infinite: true,
  autoPlay: true,
  keyBoardControl: true,
  ssr: true,
  autoPlaySpeed: 4000
};

export default CarouselSlider;
