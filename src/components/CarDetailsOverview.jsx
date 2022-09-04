// @mui
import { Typography, Stack, Box, Divider } from '@mui/material';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SpeedIcon from '@mui/icons-material/Speed';
import AirlineSeatReclineNormalOutlinedIcon from '@mui/icons-material/AirlineSeatReclineNormalOutlined';
// components
import { TextIconLabel } from '@components';

const OverviewItem = ({ icon, label, text = '-' }) => (
  <TextIconLabel
    spacing={1.5}
    alignItems='flex-start'
    icon={icon}
    value={(
      <Stack spacing={0.5}>
        <Typography variant='body2'>{label}</Typography>
        <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
      </Stack>
      )}
    sx={{ '& svg': { width: 24, height: 24 } }}
  />
);

const CarDetailsOverview = ({ car }) => {
  const { fuel_type, seats, transmission, color, description } = car;

  return (
    <Stack spacing={5}>
      {/* -- Car Overview -- */}
      <section>
        <Typography variant='h5' fontWeight='bold' sx={{ mb: 3 }}>
          Car Overview
        </Typography>
        <Box
          sx={{
            display: 'grid',
            rowGap: 2.5,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          <OverviewItem
            icon={<LocalGasStationIcon />}
            label='Fuel Type'
            text={fuel_type.charAt(0).toUpperCase() + fuel_type.slice(1)}
          />
          <OverviewItem
            icon={<GpsFixedOutlinedIcon />}
            label='GPS'
            text='Available'
          />
          <OverviewItem icon={<CarRepairIcon />} label='Transmission' text='Automatic' />
          <OverviewItem
            icon={<AcUnitIcon />}
            label='AC'
            text='Available'
          />
          <OverviewItem icon={<SpeedIcon />} label='km/h' text='250' />
          <OverviewItem
            icon={<AirlineSeatReclineNormalOutlinedIcon />}
            label='Seats'
            text='4 Seats'
          />
        </Box>
      </section>
      <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
      {/* -- Car Description -- */}
      <section>
        <Typography variant='h5' fontWeight='bold' paragraph>
          Car Description
        </Typography>
        <Typography>{description}</Typography>
      </section>
    </Stack>
  );
};

export default CarDetailsOverview;
