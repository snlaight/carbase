/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';
import { Typography, Button, Card, CardContent, CardMedia, Stack, Grid, Box, Rating } from '@mui/material';

import { supabase } from '@utils/supabase';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import SpeedIcon from '@mui/icons-material/Speed';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useParams } from 'react-router-dom';

import carImage from '@assets/images/car.png';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  console.log(car);

  useEffect(() => {
    const fetchCar = async () => {
      const { data, error } = await supabase.from('cars').select().eq('id', id);
      if (data) {
        setCar(data[0]);
      }
    };
    fetchCar();
  }, []);

  return (
    <>
      {car ? (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', margin: '100px 0 !important', flexDirection: { md: 'row', sm: 'column' }, flexWrap: 'wrap' }}>
          <CardMedia component='img' sx={{ display: 'flex', marginBottom: '30px', width: { lg: '30%', sm: '100%' }, height: { sm: '550px', lg: '100%' } }} src={carImage} />
          <Grid item container direction='column' lg={7}>
            <Typography variant='h3' align='center' gutterBottom>
              {car.make} {car.model} {car.year}
            </Typography>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-around', margin: '100px 0 !important', flexDirection: { md: 'row', sm: 'column' }, flexWrap: 'wrap' }}>
              <Box display='flex' align='center'>
                <Rating readyOnly value='4' />
                <Typography
                  variant='subtitle1'
                  gutterBottom
                  style={{ marginLeft: '10px' }}
                >
                  Rating
                </Typography>
              </Box>
              <Grid item sx={{ margin: '5px 0 !important', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Card variant='outlined' sx={{ maxWidth: 100, minWidth: 90 }}>
                  <CardContent>
                    <LocalGasStationIcon />
                    <Typography variant='subtitle1'>
                      34 <br /> L/100km
                    </Typography>
                  </CardContent>
                </Card>
                <Card variant='outlined' sx={{ maxWidth: 100, minWidth: 90 }}>
                  <CardContent>
                    <AirlineSeatReclineNormalIcon />
                    <Typography variant='subtitle1'>
                      5 <br />
                      seats
                    </Typography>
                  </CardContent>
                </Card>
                <Card variant='outlined' sx={{ maxWidth: 100, minWidth: 90 }}>
                  <CardContent>
                    <SpeedIcon />
                    <Typography variant='subtitle1'>
                      250 <br />
                      km/h
                    </Typography>
                  </CardContent>
                </Card>
                <Card variant='outlined' sx={{ maxWidth: 100, minWidth: 90 }}>
                  <CardContent>
                    <AcUnitIcon />
                    <Typography variant='subtitle1'>
                      AC <br />
                      Available
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Typography variant='h5' gutterBottom style={{ marginTop: '10px' }}>
              DESCRIPTION
            </Typography>
            <Typography style={{ marginBottom: '2rem' }}>
              {car.description}
            </Typography>
            <Stack direction='row' spacing={1}>
              <Button variant='contained'>Buy</Button>
              <Button variant='outlined'>Contact Owner</Button>
            </Stack>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default CarDetails;
