import { useState } from 'react';
// @mui
import { Slider as MUISlider, FormControl, Typography, Popover, Box, Select } from '@mui/material';
import { fCurrency } from '@utils/formatNumber';

// ----------------------------------------------------------------------

const inputStyle = {
  width: { xs: 1, md: 160 },
  '& .MuiFilledInput-input': { py: { xs: '15px', md: 0.5 } },
  '& .MuiSvgIcon-root': { color: 'text.disabled', width: 18, height: 18 },
};

const placeholder = (
  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
    Price
  </Typography>
);

// ----------------------------------------------------------------------

const PriceFilter = ({ filterPrice, onChangePrice }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const minPrice = filterPrice[0];
  const maxPrice = filterPrice[1];

  return (
    <>
      <Box onClick={handleOpen}>
        <FormControl sx={{ ...inputStyle }}>
          <Select
            open={false}
            displayEmpty
            value=''
            renderValue={() => {
              if (minPrice === 0 && maxPrice === 100000) {
                return placeholder;
              }
              return (
                <Typography variant='subtitle2' component='span'>{`${fCurrency(
                  minPrice,
                )} - ${fCurrency(maxPrice)}`}
                </Typography>
              );
            }}
          />
        </FormControl>
      </Box>
      <Popover
        open={Boolean(open)}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        transformOrigin={{ vertical: 'center', horizontal: 'center' }}
        PaperProps={{
          sx: {
            pt: 3,
            pb: 1,
            px: 4,
            width: 1,
            maxWidth: 360,
          },
        }}
      >
        <Typography variant='overline' sx={{ mb: 8, display: 'block', color: 'text.disabled' }}>
          Value based on cars state
        </Typography>
        <MUISlider
          size='medium'
          marks
          step={1000}
          min={0}
          max={100000}
          valueLabelDisplay='on'
          valueLabelFormat={(value) => `${fCurrency(value)}`}
          value={filterPrice}
          onChange={onChangePrice}
        />
      </Popover>
    </>

  );
};

export default PriceFilter;
