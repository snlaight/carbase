import { useState } from 'react';
// @mui
import { Typography, Stack, Box, Button, Divider, Card } from '@mui/material';
import { fCurrency } from '@utils/formatNumber';

const PriceAuctionForm = ({ car }) => {
  const { price, discount } = car;
  const [discountOn, setdiscountOn] = useState(discount);
  console.log('🚀 ~ file: PriceAuctionForm.jsx ~ ', car);

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction='row' alignItems='center' sx={{ typography: 'h5' }}>
          { discountOn && price > 0 && (
          <Box sx={{ color: 'grey.500', textDecoration: 'line-through', mr: 1 }}>
            {fCurrency(price)}
          </Box>
          )}
          {fCurrency(price)}
          <Typography variant='body2' component='span' sx={{ color: 'text.disabled' }}>
            /Auction
          </Typography>
        </Stack>
        <Stack spacing={1} direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='body2' sx={{ color: 'text.disabled' }}>
            Service charge
          </Typography>
          <Typography variant='body1'>{fCurrency('$500')}</Typography>
        </Stack>
        <Stack spacing={1} direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='body2' sx={{ color: 'text.disabled' }}>
            Discount
          </Typography>
          <Typography variant='body1'>-</Typography>
        </Stack>
      </Stack>
      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction='row' alignItems='center' justifyContent='space-between'>
          <Typography variant='h5'>Total</Typography>
          <Typography variant='h5'>{fCurrency(price + 500)}</Typography>
        </Stack>

        <Button
          size='large'
          variant='contained'

        >
          Reserve Bid
        </Button>
      </Stack>
    </Card>
  );
};

export default PriceAuctionForm;
