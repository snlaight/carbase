import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

import { Typography, Stack } from '@mui/material';

const FuelTypes = ({ fuelType, ...other }) => (
  <Stack spacing={0.5} direction='row' alignItems='center' {...other}>
    <LocalGasStationIcon sx={{ width: 18, height: 18 }} />
    <Typography variant='caption' sx={{ fontSize: '14px' }}>{fuelType}</Typography>
  </Stack>
);

export default FuelTypes;
