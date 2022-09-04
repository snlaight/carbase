import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Stack, Divider, Typography, Card, Box } from '@mui/material';

import { Image, FavoriteButton, RatingLabel, WheelsLabel, FuelLabel, SeatLabel } from '@components';

// import { cars } from '@utils/data/cars';
import { fCurrency } from '@utils/formatNumber';

const CarItem = ({ car }) => {
  console.log('🚀 ~ file: CarItem.jsx ~ line 11 ~ CarItem ~ car', car);
  const { favorited } = car;
  const [favorite, setFavorite] = useState(favorited);

  const theme = useTheme();

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };

  return (
    <Box padding={{ xs: 1, md: 2, lg: 3 }} key={car.id}>
      <Box
        component={Card}
        boxShadow={{ xs: 1, sm: 0 }}
        borderRadius={2}
        sx={{
          position: 'relative',
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            pt: 1.5,
            pl: 2,
            pr: 1.5,
            top: 0,
            width: 1,
            zIndex: 9,
            position: 'absolute',
          }}
        >
          <Stack
            spacing={0.5}
            direction='row'
            sx={{
              px: 1,
              borderRadius: 0.75,
              typography: 'subtitle2',
              fontSize: '1rem',
              bgcolor: 'text.primary',
              color: (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            }}
          >
            {
              car.carPriceSale > 0 && (
                <Box sx={{ color: 'grey.500', textDecoration: 'line-through', mr: 0.5 }}>
                  {fCurrency(car.carPrice)}
                </Box>
              )
             }
            {fCurrency(car.carPriceSale)}
          </Stack>

          <FavoriteButton
            checked={favorite}
            onChange={handleChangeFavorite}
            sx={{ color: theme.palette.background.header }}
          />

        </Stack>
        <Image sx={{ border: '5px solid #fff', borderRadius: 2 }} src={car.carImage} ratio='1/1' />
        <Stack direction='row' justifyContent='space-between' sx={{ p: 2 }}>
          <Box
            sx={{
              typography: 'body3',
              color: 'text.disabled',
            }}
          >
            {car.carBrand}
          </Box>

          <Box
            marginBottom={0}
            width='54px'
            height='54px'
          >
            <img
              src={car.carCompany}
              alt={car.carCompany}
              width='100%'
            />
          </Box>
        </Stack>
        <Stack spacing={0.5} sx={{ p: 2 }}>
          <Typography variant='body3' fontSize='small' sx={{ color: 'text.disabled' }}>
            {car.carLocation}
          </Typography>

          <Typography variant='h6' fontWeight='bold'>
            {car.carName}
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />
        <Stack direction='row' justifyContent='space-between' sx={{ p: 3 }}>
          <Box
            sx={{
              typography: 'body3',
              color: 'text.disabled',
            }}
          >
            <WheelsLabel driveType={car.carDriveType} />
          </Box>
          <Box
            sx={{
              typography: 'body3',
              color: 'text.disabled',
            }}
          >
            <FuelLabel fuelType={car.carFuelType} />
          </Box>
          <Box
            sx={{
              typography: 'body3',
              color: 'text.disabled',
            }}
          >
            <SeatLabel seatCount={car.carSeatCount} />
          </Box>
          <Box
            sx={{ px: 1,
              borderRadius: 1,
              typography: 'subtitle2',
              bgcolor: 'text.primary',
              color: (theme.palette.mode === 'light' ? 'common.white' : 'grey.800') }}
          >
            <RatingLabel ratings={car.rating} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CarItem;
