// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

import { CarItem } from '@components';

// Demo data
import { cars } from '@utils/data/cars';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.alternate.main,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

const CarSimilar = () => {
  console.log('🚀 ~ file: CarSimilar.jsx ~ line 18 ~ CarSimilar ~ car');
  return (
    <RootStyle>
      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ mb: { xs: 8, md: 6 } }}
        >
          <Typography variant='h4' fontWeight='bold'>You Might Like</Typography>

          <Button
            endIcon={<ArrowRightAltOutlinedIcon sx={{ width: 22, height: 22 }} />}
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
            }}
          >
            View All
          </Button>

        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 2 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {cars.slice(1, 5).map((car, i) => (
            <CarItem key={i} car={car} />
          ))}
        </Box>

        <Stack
          alignItems='center'
          sx={{
            mt: 8,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <Button
            endIcon={<ArrowRightAltOutlinedIcon sx={{ width: 22, height: 22 }} />}
          >
            View All
          </Button>

        </Stack>
      </Container>
    </RootStyle>
  );
};

export default CarSimilar;
