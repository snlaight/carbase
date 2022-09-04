import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Reviews = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box>
      <Box marginBottom={4} data-aos={isMd ? 'fade-right' : 'fade-up'}>
        <Typography
          variant='h2'
          color='textPrimary'
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Find the{' '}
          <Typography
            color='secondary.main'
            component='span'
            variant='inherit'
          >
            Best Car
          </Typography>
          {' '}for you
          <br />
          around the{' '}
          <Typography
            color='secondary.light'
            component='span'
            variant='inherit'
          >
            World
          </Typography>
        </Typography>

        <Typography variant='h6' component='p' color='secondary.main'>
          We provide the best car options and expert services for the greatest customer experience.
        </Typography>
      </Box>
      <Box
        maxWidth={{
          md: '50%',
        }}
      >
        <Box
          component={Card}
          boxShadow={3}
          borderRadius={5}
          padding={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            clipPath: 'polygon(0 0, 100% 0, 81% 100%, 0% 100%)',
            backgroundImage: 'url(src/assets/images/civic_type_r20.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'right',
          }}
        >

          <CardContent>
            <Box>

              {[
                {
                  feedback:
                      '',
                  image:
                      '',
                  name: '',
                  title: '',
                  brand: 'https://www.carlogos.org/car-logos/honda-logo-1700x1150.png',
                },
              ].map((item, i) => (
                <Box padding={{ xs: 1, sm: 2, lg: 3 }} key={i}>
                  <Box
                    marginBottom={1}
                    width='10%'
                    height='10%'
                  >
                    <img
                      src={item.brand}
                      alt={item.brand}
                      width='100%'
                    />
                  </Box>
                  <Box
                    component={Typography}
                    variant='h6'
                    fontWeight={400}
                    marginBottom={2}
                  >
                    {item.feedback}
                  </Box>
                  <Box width={1}>
                    <Box
                      component={ListItem}
                      disableGutters
                      width='auto'
                      padding={0}
                    >
                      <ListItemAvatar>
                        <Avatar src={item.image} />
                      </ListItemAvatar>
                      <Box
                        component={ListItemText}
                        primary={item.name}
                        secondary={item.title}
                        margin={0}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
              <Box
                marginTop={2}
                display='flex'
                justifyContent='left'
                data-aos='fade-up'
              >
                <Button color='primary' variant='contained' size='large'>
                  Buy Now
                </Button>
              </Box>
            </Box>

          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
