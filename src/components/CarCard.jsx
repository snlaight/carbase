import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import { Grid } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

const CarCard = () => (
  <Grid container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { md: 'space-between', sm: 'center' }, overflow: 'auto', padding: '25px' }}>
    <Card sx={{ maxWidth: 345, borderRadius: '1rem', boxShadow: '0 6px 20px 0 #dbdbe8', marginBottom: '40px', '&:hover': { boxShadow: '-12px 10px 20px 0 #bcc3d6' } }}>
      <CardHeader
        avatar={(
          <Chip sx={{ bgcolor: '#ffd700', fontSize: '1rem' }} icon={<StarRateIcon fontSize='medium' />} label='5' />
        )}
      />
      <CardMedia
        component='img'
        height='140'
        image='https://www.motortrend.com/uploads/2021/11/2022-Ford-Mustang-Shelby-GT500-Heritage-Edition-14.jpg'
        alt='Shelby GT500'
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          Shelby GT500
        </Typography>
        <Typography variant='h7' color='text.secondary'>
          Automatic - Gas - 4 Seats
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>$10,000</Button>
        <Button size='small' variant='contained'>Buy Now</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, borderRadius: '1rem', boxShadow: '0 6px 20px 0 #dbdbe8', marginBottom: '40px', '&:hover': { boxShadow: '-12px 10px 20px 0 #bcc3d6' } }}>
      <CardHeader
        avatar={(
          <Chip sx={{ bgcolor: '#ffd700', fontSize: '1rem' }} icon={<StarRateIcon fontSize='medium' />} label='6.5' />
        )}
      />
      <CardMedia
        component='img'
        height='140'
        image='https://w0.peakpx.com/wallpaper/893/20/HD-wallpaper-dodge-charger-srt-hellcat-2020-dodge-charger-cars-behance.jpg'
        alt='Dodge Charger SRT Hellcat 2020'
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          Dodge Charger SRT Hellcat 2020
        </Typography>
        <Typography variant='h7' color='text.secondary'>
          Automatic - Gas - 4 Seats
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>$9,000</Button>
        <Button size='small' variant='contained'>Buy Now</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, borderRadius: '1rem', boxShadow: '0 6px 20px 0 #dbdbe8', marginBottom: '40px', '&:hover': { boxShadow: '-12px 10px 20px 0 #bcc3d6' } }}>
      <CardHeader
        avatar={(
          <Chip sx={{ bgcolor: '#ffd700', fontSize: '1rem' }} icon={<StarRateIcon fontSize='medium' />} label='8.5' />
        )}
      />
      <CardMedia
        component='img'
        height='140'
        image='https://images.hgmsites.net/hug/mercedes-benz-cla-class_100706921_h.jpg'
        alt='2020 Mercedes-AMG CLA45'
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          2020 Mercedes-AMG CLA45
        </Typography>
        <Typography variant='h7' color='text.secondary'>
          Automatic - Gas - 4 Seats
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>$12,000</Button>
        <Button size='small' variant='contained'>Buy Now</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, borderRadius: '1rem', boxShadow: '0 6px 20px 0 #dbdbe8', marginBottom: '40px', '&:hover': { boxShadow: '-12px 10px 20px 0 #bcc3d6' } }}>
      <CardHeader
        avatar={(
          <Chip sx={{ bgcolor: '#ffd700', fontSize: '1rem' }} icon={<StarRateIcon fontSize='medium' />} label='9.5' />
        )}
      />
      <CardMedia
        component='img'
        height='140'
        image='https://f9z6u2y8.rocketcdn.me/public/blog/wp-content/uploads/2020/02/YA544nQ8-2020-Mercedes-Benz-AMG-GT-Series-Prices-Reviews-and-Pictures-in-Nigeria-1.jpg'
        alt='Dodge Charger SRT Hellcat 2020'
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          2020 Mercedes Benz AMG GT
        </Typography>
        <Typography variant='h7' color='text.secondary'>
          Automatic - Gas - 4 Seats
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>$15,000</Button>
        <Button size='small' variant='contained'>Buy Now</Button>
      </CardActions>
    </Card>
  </Grid>
);

export default CarCard;
