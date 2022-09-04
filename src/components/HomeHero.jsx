
import React from 'react';

import CarSlider from '@components/CardSlider/CarSlider';
import { cars } from '@utils/data/cars';
import { Container } from '@components';

const Hero = () => (
  <Container>
    <CarSlider cars={cars} />
  </Container>

);

export default Hero;
