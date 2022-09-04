/* eslint-disable camelcase */
// @mui
import { Stack, Typography, Avatar, Button, Box, Paper } from '@mui/material';
// components
import { RatingLabel, SocialsButton } from '@components';
// Demo data
import { cars } from '@utils/data/cars';

const { rating } = cars[0];

const OwnersInfoBox = ({ car }) => {
  const { created_at } = car;

  return (
    <Box>
      <Paper variant='outlined' sx={{ borderRadius: 2 }}>
        <Stack alignItems='center' sx={{ textAlign: 'center', p: 5 }}>
          <Box sx={{ position: 'relative' }}>

            <Avatar src='https://avatars.githubusercontent.com/u/26049298?v=4' sx={{ width: 96, height: 96 }} />
          </Box>

          <Stack alignItems='center' spacing={1} sx={{ my: 2 }}>
            <Typography variant='h5' fontWeight='bold'>Demar Swack</Typography>
            <RatingLabel ratings={rating} reviews />
          </Stack>

          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            about me
          </Typography>

          <Stack alignItems='center' sx={{ my: 2.5 }}>
            <SocialsButton initialColor />
          </Stack>

          <Typography variant='caption' paragraph sx={{ color: 'text.disabled' }}>
            Member since {created_at}
          </Typography>

          <Button color='inherit' variant='outlined' size='large'>
            Contact Car Owner
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};
export default OwnersInfoBox;
