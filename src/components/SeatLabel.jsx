import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';// @mui

import { Typography, Stack } from '@mui/material';

const SeatLabel = ({ seatCount, ...other }) => (
  <Stack spacing={0.5} direction='row' alignItems='center' {...other}>
    <AirlineSeatReclineNormalIcon sx={{ width: 18, height: 18 }} />
    <Typography variant='caption' sx={{ fontSize: '14px' }}>{seatCount}</Typography>
  </Stack>
);

export default SeatLabel;
