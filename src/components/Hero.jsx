import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => (
  <Box component={Link} to='/' sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', height: '550px', textDecoration: 'none' }}>
    <Card sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', position: 'relative' }}>
      <CardMedia
        media='picture'
        alt='Ford Mustang Shelby GT500'
        image='https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg'
        title='Ford Mustang Shelby GT500'
        sx={{ position: 'absolute', top: 0, right: 0, height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.575)', backgroundBlendMode: 'darken' }}
      />
      <Box padding='20px'>
        <CardContent
          sx={{ color: '#fff', position: 'relative', width: { base: '40%', sm: '100%' } }}
        >
          <Typography variant='h5' gutterBottom>
            2022 Ford Mustang Shelby GT500
          </Typography>
          <Typography variant='body2'>
            The 2022 Ford Mustang Shelby GT500 is a great car
          </Typography>
        </CardContent>
      </Box>
    </Card>
  </Box>
);

export default Hero;
