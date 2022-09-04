import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';

import { styled, useTheme } from '@mui/material/styles';
import { Typography, Grid, Container, Stack, Box } from '@mui/material';

import { CarSliderItem, CarSliderThumbnailItem } from './CarSliderItem';
import SliderArrows from './SliderArrows';


const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));



const CarSlider = ({ cars }) => {

  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  const [carouselContent, setCarouselContent] = useState();
  const [carouselThumbnail, setCarouselThumbnail] = useState();

  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    setCarouselContent(carouselRef1.current || undefined);
    setCarouselThumbnail(carouselRef2.current || undefined);
  }, [selected]);

  const handlePrevious = () => {
    carouselRef2.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef2?.current?.slickNext();
  };

  const carouselContentSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setSelected(next),
  };

  const carouselThumbnailSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    centerMode: true,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setSelected(next),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <RootStyle>
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ mb: 5 }}>
              What Our Customer Say
            </Typography>

            <SliderArrows onNext={handleNext} onPrevious={handlePrevious}>
              <Slider {...carouselContentSettings} asNavFor={carouselThumbnail} ref={carouselRef1}>
                {cars.map((Car) => (
                  <CarSliderItem
                    key={Car.id}
                    car={Car}
                  />
                ))}
              </Slider>

              <Box sx={{ mb: 3, mx: 'auto', maxWidth: { xs: 360, sm: 420 } }}>
                <Slider
                  {...carouselThumbnailSettings}
                  asNavFor={carouselContent}
                  ref={carouselRef2}
                >
                  {cars.map((Car, index) => (
                    <CarSliderThumbnailItem
                      key={Car.id}
                      car={Car}
                      isSelected={selected === index}
                    />
                  ))}
                </Slider>
              </Box>
            </SliderArrows>

            {cars.map(
              (Car, index) =>
                selected === index && (
                  <Stack key={Car.id} spacing={0.5}>
                    <Typography variant="h6">{Car.name}</Typography>
                    <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                      {Car.id}
                    </Typography>
                  </Stack>
                )
            )}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  )
}

export default CarSlider
