import React from 'react';

import { useTheme } from '@mui/material/styles';

import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const SearchByCity = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color='secondary'
          align='center'
        >
          our Cities
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant='h3'
          align='center'
          data-aos='fade-up'
        >
          Search by City
        </Box>
        <Box
          marginTop={2}
          display='flex'
          justifyContent='center'
          data-aos='fade-up'
        >
          <Button color='primary' variant='contained' size='large'>
            View all
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img13.jpg',
            title: 'New York',
            subtitle: 'City of opportunities.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img14.jpg',
            title: 'Paris',
            subtitle: 'Artistic city.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img15.jpg',
            title: 'Barcelona',
            subtitle: 'City of museums.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img16.jpg',
            title: 'Prague',
            subtitle: 'City of towers.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img17.jpg',
            title: 'Milan',
            subtitle: 'Fashion capital.',
          },
          {
            media: 'https://assets.maccarianagency.com/backgrounds/img18.jpg',
            title: 'Yerevan',
            subtitle: 'The best city.',
          },
        ].map((item, i) => (
          <Grid item xs={6} sm={4} md={2} key={i} data-aos='fade-up'>
            <Box
              component='a'
              href=''
              display='block'
              width='100%'
              height='100%'
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width='100%'
                height='100%'
                borderRadius={2}
                display='flex'
                flexDirection='column'
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 340,
                  }}
                />
                <Box component={CardContent}>
                  <Box
                    component={Typography}
                    variant='h6'
                    fontWeight={500}
                    align='left'
                  >
                    {item.title}
                  </Box>
                  <Typography
                    align='left'
                    variant='body2'
                    color='textSecondary'
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchByCity;
