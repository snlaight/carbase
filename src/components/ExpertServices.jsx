/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';

import SendEmails from '@assets/svg/SendEmails';
import CreditCard from '@assets/svg/CreditCard';
import Support from '@assets/svg/Support';

const ExpertServices = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={{ xs: 4, sm: 8, md: 12 }}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color='secondary'
          align='center'
        >
          Expert Services
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant='h3'
          align='center'
          gutterBottom
          data-aos='fade-up'
        >
          Get the best experience with our best services
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Special Offers',
            subtitle:
              'We provide much of discount and promos for great budget cars',
            icon: (
              <SendEmails width='100%' height='100%' />
            ),
            color: theme.palette.secondary.main,
          },
          {
            title: 'Best Price',
            subtitle:
              'Great and fixed price is suitable for you who looking for according to your budget',
            icon: (
              <CreditCard width='100%' height='100%' />
            ),
            color: theme.palette.secondary.main,
          },
          {
            title: '24/7',
            subtitle:
              'We are ready 24 hours for you to contact us and get the best service experience',
            icon: (
              <Support width='100%' height='100%' />
            ),
            color: theme.palette.secondary.main,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height='100%' data-aos='fade-up'>
              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
              >
                <Box
                  width={260}
                  height={260}
                  marginBottom={6}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant='h4'
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                  align='center'
                >
                  {item.title}
                </Typography>
                <Typography align='center' color={theme.palette.secondary.dark}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpertServices;
