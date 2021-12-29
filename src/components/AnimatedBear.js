import React from 'react';
import AnimatedProfile from './AnimatedProfile';
import bear from '../assets/bear.png';

const sprite = {
  numFrames: 13,
  width: 178,
  height: 172,
  image: bear,
  scrollAmount: 20,
};

const AnimatedBear = props => {
  return <AnimatedProfile sprite={sprite} {...props} />;
};

export default AnimatedBear;
