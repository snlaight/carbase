/* eslint-disable import/no-unresolved */
import React from 'react';
import { useTheme } from '@mui/material/styles';

import { Box } from '@mui/material';
import { Hero, HomeHero, Container, ExpertServices, SearchByCity, CarCard, CarCardItem, CarSliderCard } from '@components';

const Home = () => {
  const theme = useTheme();

  return (
    <Box>

      <Box
        position='relative'
        minHeight={450}
        overflow='hidden'
        borderBottom={`10px solid ${theme.palette.primary.dark}`}
        bgcolor={theme.palette.background.header}
      >
        <Container position='relative' zIndex={2}>
          <CarSliderCard />
        </Container>

      </Box>

      <Container>
        <ExpertServices />
      </Container>
      <Box bgcolor={theme.palette.alternate.main} position='relative'>
        <Container paddingX='0 !important' maxWidth='100%'>
          <CarCardItem />
        </Container>
      </Box>
      <Container>
        <SearchByCity />
      </Container>
      <Container position='relative' zIndex={2}>
        <HomeHero />
      </Container>

    </Box>
  );
};

export default Home;
