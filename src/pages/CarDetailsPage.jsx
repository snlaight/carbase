import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Stack, Divider, Collapse, Typography, useTheme } from '@mui/material';
// components
import { CarSimilar, CarDetailsHeader, CarDetailsOverview, CarGallery, Container, OwnersInfoBox, PriceAuctionForm } from '@components';
import CarReviewToolbar from '@components/CarReview/CarReviewToolbar';
import CarReviewForm from '@components/CarReview/CarReviewForm';
// utils
import { supabase } from '@utils/supabase';
// Demo data
import { cars } from '@utils/data/cars';

// ----------------------------------------------------------------------
console.log('🚀 ~ file: CarDetailsPage.jsx ~ ', cars);
// ----------------------------------------------------------------------

const CarDetailsPage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [sort, setSort] = useState('latest');
  const [openReview, setOpenReview] = useState(false);
  console.log(car);

  useEffect(() => {
    const fetchCar = async () => {
      const { data, error } = await supabase.from('cars').select().eq('id', id);
      if (data) {
        setCar(data[0]);
      } else {
        console.warn(error);
      }
    };
    fetchCar();
  }, []);

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  return (
    <>
      <Box bgcolor={theme.palette.background.default}>
        {car ? (
          <Container>
            <Box padding={{ xs: 1, md: 2, lg: 3 }}>
              <CarGallery gallery={cars} />
            </Box>

            <Grid container spacing={8} direction='row-reverse'>
              <Grid item xs={12} md={5} lg={4}>
                <PriceAuctionForm car={car} />
              </Grid>

              <Grid item xs={12} md={7} lg={8}>
                <CarDetailsHeader car={car} />
                <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
                <CarDetailsOverview car={car} />
              </Grid>
            </Grid>
          </Container>

        ) : null}
      </Box>
      {car ? (
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={5} lg={4}>
              <OwnersInfoBox car={car} />
            </Grid>

            <Grid item xs={12} md={7} lg={8}>
              <CarReviewToolbar
                totalReview='5'
                onOpenReview={() => setOpenReview(!openReview)}
                sort={sort}
                onChangeSort={handleChangeSort}
              />
              <Collapse in={openReview}>
                <CarReviewForm onClose={() => setOpenReview(false)} />
              </Collapse>
              {/* <CarReviewList reviews={reviews} /> */}
            </Grid>
          </Grid>
        </Container>
      ) : null}

      <Box bgcolor={theme.palette.alternate.main}>
        {car ? (
          <Container>
            <CarSimilar />
          </Container>
        ) : null}
      </Box>
    </>
  );
};

export default CarDetailsPage;
