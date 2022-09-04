import { useState } from 'react';
// @mui
import { Typography, Stack, Link, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// components
import { FavoriteButton, RatingLabel, ShareButton, TextIconLabel } from '@components';

// Demo data
import { cars } from '@utils/data/cars';

const { favorited, rating, carLocation } = cars[0];

const CarDetailsHeader = ({ car }) => {
  console.log('🚀 ~ file: CarDetailsHeader.jsx ~ line 8 ~ CarDetailsHeader ~ car', car);
  const { make, model, year, owned_by, location } = car;
  const [favorite, setFavorite] = useState(favorited);
  const theme = useTheme();

  const handleChangeFavorite = (event) => {
    setFavorite(event.target.checked);
  };

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <Typography variant='h3' component='h1' sx={{ flexGrow: 1, pr: { md: 10 } }}>
          {make} {model} {year}
        </Typography>
        <Stack direction='row' alignItems='center' flexShrink={0}>
          <ShareButton />
          <FavoriteButton
            checked={favorite}
            onChange={handleChangeFavorite}
            sx={{ color: theme.palette.background.header }}
          />
        </Stack>
      </Stack>
      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
        <RatingLabel ratings={rating} reviews />

        <TextIconLabel
          icon={<LocationOnIcon sx={{ width: 20, height: 20, mr: 0.5 }} />}
          value={carLocation}
        />

        <TextIconLabel
          icon={<Avatar src='https://avatars.githubusercontent.com/u/26049298?v=4' sx={{ width: 24, height: 24 }} />}
          value={(
            <>
              <Typography variant='body3' sx={{ color: 'text.light', mx: 0.5 }}>
                Owned by
              </Typography>
              <Link href='/' variant='subtitle2' color='text.secondary' fontWeight='bold'>
                Demar ({owned_by})
              </Link>
            </>
          )}
        />
      </Stack>
    </>

  );
};

export default CarDetailsHeader;
