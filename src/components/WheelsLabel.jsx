import CarRepairIcon from '@mui/icons-material/CarRepair';

import { Typography, Stack } from '@mui/material';

const WheelsLabel = ({ driveType, ...other }) => (
  <Stack spacing={0.5} direction='row' alignItems='center' {...other}>
    <CarRepairIcon sx={{ width: 18, height: 18 }} />
    <Typography variant='caption' sx={{ fontSize: '14px' }}>{driveType}</Typography>
  </Stack>
);

export default WheelsLabel;
